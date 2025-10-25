/**
 * Esta classe representa a página de registro (Register) da aplicação Parabank.
 * Ela encapsula os seletores e os métodos de interação específicos dessa página,
 * segundo o padrão Page Object Model (POM).
 *
 * O Objetivo do POM é melhorar a manutenção e a legibilidade dos testes automatizados,
 * separando a lógica de interação (o "como") com a interface do usuário da lógica dos testes (o "o quê").
 *
 * Será utilizada no MVP para o "PASSO 1: REGISTRO (CREATE)".
 */

// Importa o tipo 'Page'  e o 'Locator' do Playwright
import { type Page, type Locator } from "@playwright/test";

export class RegisterPage {
  //---Propriedade da Classe (Locators) ---
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipCodeInput: Locator;
  readonly phoneInput: Locator; // Este campo será utilizado para o fluxo update do MVP
  readonly ssnInput: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;
  readonly successMessageTitle: Locator;
  readonly successMessageBody: Locator;

  /**
   * Construtor da classe RegisterPage.
   * Inicializa a instância da página e mapeia todos seletores (Locators).
   * @param page - A instância da página do Playwright.
   */
  constructor(page: Page) {
    this.page = page;

    // Mapeamento dos seletores (Locators) da página de registro
    // Priorizamos seletores 'id' e 'name' para maior estabilidade dos testes
    this.firstNameInput = page.locator('input[id="customer.firstName"]');
    this.lastNameInput = page.locator('input[id="customer.lastName"]');
    this.addressInput = page.locator('input[id="customer.address.street"]');
    this.cityInput = page.locator('input[id="customer.address.city"]');
    this.stateInput = page.locator('input[id="customer.address.state"]');
    this.zipCodeInput = page.locator('input[id="customer.address.zipCode"]');
    this.phoneInput = page.locator('input[id="customer.phoneNumber"]');
    this.ssnInput = page.locator('input[id="customer.ssn"]');
    this.usernameInput = page.locator('input[id="customer.username"]');
    this.passwordInput = page.locator('input[id="customer.password"]');
    this.confirmPasswordInput = page.locator('input[id="repeatedPassword"]');
    this.registerButton = page.locator(
      'input[type="submit"][value="Register"]'
    );

    // Seletores para validar o sucesso do registro
    this.successMessageTitle = page.locator("h1.title");
    this.successMessageBody = page.locator('div[id="rightPanel"] p');
  }

  //---Métodos da Classe (Ações) ---

  /**
   * Navega diretamente para a página de registro.
   * URL base no arquivo 'playwright.config.ts'.
   */
  async goto() {
    await this.page.goto("register.htm");
  }

  /**
   * Preenche o formulário de registro com os dados do usuário.
   *
   * @param userData - Objeto contendo os dados do usuário.
   */
  async fillRegistrationForm(userData: any) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.addressInput.fill(userData.address);
    await this.cityInput.fill(userData.city);
    await this.stateInput.fill(userData.state);
    await this.zipCodeInput.fill(userData.zipCode);
    await this.phoneInput.fill(userData.phone);
    await this.ssnInput.fill(userData.ssn);
    await this.usernameInput.fill(userData.username);
    await this.passwordInput.fill(userData.password);

    //Assume que os dados fornecidos são válidos
    await this.confirmPasswordInput.fill(userData.password);
  }

  /**
   * Clica no botão "Register" para enviar o formulário.
   */
  async submitRegistration() {
    await this.registerButton.click();
  }

  /**
   * Método auxiliar para obter o texto da mensagem de sucesso.
   * Usado para validar (assert) no arquivo de teste.
   * @returns O texto da mensagem de sucesso após o registro.
   */
  async getSuccessMessageText() {
    return this.successMessageBody.textContent();
  }

  /**
   * Método auxiliar para obter o título de boas-vindas.
   * Usado para validar (assert) no arquivo de teste.
   * @returns O texto do título de boas-vindas.
   */
  async getWelcomeTitleText() {
    return this.successMessageTitle.textContent();
  }
}
