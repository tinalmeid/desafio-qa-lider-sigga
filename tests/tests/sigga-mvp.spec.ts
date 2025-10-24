/**
 * Arquivo principal de testes para o MVP do Sigga.
 * Utiliza a estrutura Playwright com TypeScript.
 * Objetivo: Validar o fluxo de registro de usuário definido no PLANO_DE_TESTES.md
 * 1. Registrar um novo usuário (Create)
 * 2. Verificar o sucesso do registro ao fazer Login (Read)
 * 3. Atualizar informações do usuário - Telefone (Update)
 * 4. Fazer Logout
 *
 * Padrão POM (Page Object Model), importando a classe RegisterPage para interagir com a aplicação
 */

// Importa as funções 'test' e 'expect' do Playwright
import { test, expect } from "@playwright/test";

// Importa as Page Objects necessários
import { RegisterPage } from "./pages/register.page";

// Importa a massa de testes
import { registrationData, loginCredentials } from "./data/user.data";

//--Bloco de Testes (Suite) --
test.describe("Fluxo E2E - MVP Sigga (Login + CRUD)", () => {
  //TEST CT-01: Registro, Login, Atualização e Logout
  test("Deve registrar, logar, atualizar e deslogar um usuário com sucesso", async ({
    page,
  }) => {
    //---PASSO 1: Registro (CREATE) ---
    const registerPage = new RegisterPage(page);

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
  });
});
