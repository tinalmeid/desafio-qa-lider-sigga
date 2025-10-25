/**
 * Arquivo principal de testes para o MVP do Sigga.
 * Utiliza a estrutura Playwright com TypeScript.
 * Objetivo: Validar o fluxo de registro de usuário definido no PLANO_DE_TESTES.md
 * Fluxo de Teste:
 * PASSO 1: Registro de Usuário (CREATE)
 * PASSO 2 : Atualização de Perfil (UPDATE)
 * PASSO 3: Logout (LOGOUT)
 * PASSO 4: Login do Usuário (READ) - Valida a criação do usuário e realiza login
 *
 * Padrão POM (Page Object Model), importando a classe RegisterPage para interagir com a aplicação
 */

// Importa as funções 'test' e 'expect' do Playwright
import { test, expect } from "@playwright/test";

// Importa as Page Objects necessários
import { RegisterPage } from "./pages/register.page";
import { MainAccountPage } from "./pages/main-account.page";
import { LoginPage } from "./pages/login.page";
import { UpdateProfilePage } from "./pages/update-profile.page";

// Importa a massa de testes
import { registrationData, loginCredentials } from "./data/user.data";

//--Bloco de Testes (Suite) --
test.describe("Fluxo E2E - MVP Sigga (CRUD Usuário)", () => {
  //TEST CT-01: Registro, Atualização, Logout e Login
  test("Deve registrar, atualizar perfil, deslogar  e logar com sucesso", async ({
    page,
  }) => {
    //---Instância de todas as Pages ---
    const registerPage = new RegisterPage(page);
    const mainAccountPage = new MainAccountPage(page);
    const updateProfilePage = new UpdateProfilePage(page);
    const loginPage = new LoginPage(page);

    //---PASSO 1: Registro de Usuário (CREATE) ---
    await registerPage.goto();
    await registerPage.fillRegistrationForm(registrationData);
    await registerPage.submitRegistration();
    // Validações após o create(Assert)
    await expect(registerPage.successMessageTitle).toContainText(
      `Welcome ${registrationData.username}`
    );
    await expect(registerPage.successMessageBody).toContainText(
      "Your account was created successfully."
    );

    //---PASSO 2: Atualização de Perfil (UPDATE) ---
    await mainAccountPage.clickUpdateProfile();
    // Preenche o numero de telefone
    const newPhoneNumber = "(31) 98888-7777";
    await updateProfilePage.updatePhoneNumber(newPhoneNumber);
    // Validação após o update (Assert)
    await expect(updateProfilePage.successMessageTitle).toHaveText(
      "Profile Updated"
    );

    //---PASSO 3: Logout (LOGOUT) ---
    await mainAccountPage.clickLogout();
    // Validação após o logout (Assert)
    await expect(loginPage.loginButton).toBeVisible();

    //---PASSO 4: Login do Usuário (READ) ---
    await loginPage.loginAsUser(
      loginCredentials.username,
      loginCredentials.password
    );
    // Validação após o login (Assert)
    await expect(mainAccountPage.logoutLink).toBeVisible();
  });
});
