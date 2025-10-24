/**
 * Esta classe representa o formulário de login da aplicação Parabank(Serviços Conta).
 * Ela encapsula os seletores e os métodos de interação específicos dessa página,
 * segundo o padrão Page Object Model (POM).
 *
 * O Objetivo do POM é melhorar a manutenção e a legibilidade dos testes automatizados,
 * separando a lógica de interação (o "como") com a interface do usuário da lógica dos testes (o "o quê")
 *
 * Será utilizada no MVP para o "PASSO 2: LOGIN (READ)".
 */

// Importa o tipo 'Page'  e o 'Locator' do Playwright
import { type Page, type Locator } from "@playwright/test";

export class LoginPage {
  //---Propriedade da Classe (Locators) ---
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator; // Locator para mensagem de erro de login

  /**
   * Construtor da classe LoginPage.
   * @param page - A instância da página (page) do Playwright.
   */
  constructor(page: Page) {
    this.page = page;

    // Mapeamento dos seletores do formulário de login
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[type="submit"][value="Log In"]');
    this.errorMessage = page.locator("p.error"); // Seleciona a mensagem de erro de login
  }
  //---Métodos de Interação da Página (Actions) ---
  /**
   * Navega para a pagina Inicial.
   * URL base definida no arquivo de configuração 'playwright.config.ts'.
   */
  async goto() {
    await this.page.goto("/");
  }

  //@param username - Nome de usuário para login
  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  //@param password - Senha para login
  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  // Realiza o clique no botão de login
  async clickLogin() {
    await this.loginButton.click();
  }

  /**
   * Método executa a ação de login completo.(Helpers)
   * @param username - Nome de usuário para login
   * @param password - Senha para login
   */
  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  // Retorna o texto da mensagem de erro de login( se houver)
  async getErrorMessageText() {
    return this.errorMessage.textContent();
  }
}
