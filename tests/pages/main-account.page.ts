/**
 * Esta classe representa área logada da aplicação Parabank(Serviços Conta).
 * Ela encapsula os elementos do menu lateral que são persistente em 'logada' como "Update Contact Info" e "Log Out".
 * segundo o padrão Page Object Model (POM).
 *
 * O Objetivo do POM é melhorar a manutenção e a legibilidade dos testes automatizados,
 * separando a lógica de interação (o "como") com a interface do usuário da lógica dos testes (o "o quê")
 *
 * Será utilizada no MVP para o "PASSO 3: LOGOUT".
 */

// Importa o tipo 'Page'  e o 'Locator' do Playwright
import { type Page, type Locator } from "@playwright/test";

export class MainAccountPage {
  //---Propriedade da Classe (Locators) ---
  readonly page: Page;
  readonly updateProfileLink: Locator; // Novo valor do campo adicionado para o fluxo update do MVP
  readonly logoutLink: Locator; // Usado para o passo de "Logout

  /**
   * Construtor da classe MainAccountPage.
   *@param page - A instância da página(Page) do Playwright.
   */
  constructor(page: Page) {
    this.page = page;

    // Mapeamento dos seletores do menu lateral da área logada
    this.updateProfileLink = page.locator('a[href*="updateprofile.htm"]');
    this.logoutLink = page.locator('a[href*="logout.htm"]');
  }

  //---Métodos de Interação da Página (Actions) ---
  /**
   * Clica no link "Log Out" para deslogar o usuário.
   */
  async clickLogout() {
    await this.logoutLink.click();
  }
  /**
   * Clica no link "Update Contact Info" para navegar até a página de perfil.
   */
  async clickUpdateProfile() {
    await this.updateProfileLink.click();
  }
}
