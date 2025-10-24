/**
 * Esta classe representa o formulário de atualização de perfil da aplicação Parabank(Atualizar Perfil).
 * Ela encapsula os seletores e os métodos de interação específicos dessa página,
 * segundo o padrão Page Object Model (POM).
 * O Objetivo do POM é melhorar a manutenção e a legibilidade dos testes automatizados,
 * separando a lógica de interação (o "como") com a interface do usuário da lógica dos testes (o "o quê")
 *
 * Será utilizada no MVP para o "PASSO 3: ATUALIZAR PERFIL (UPDATE)".
 */

// Importa o tipo 'Page'  e o 'Locator' do Playwright
import { type Page, type Locator } from "@playwright/test";

export class UpdateProfilePage {
  //---Propriedade da Classe (Locators) ---
  readonly page: Page;
  readonly phoneInput: Locator; // Campo que será utilizado para o fluxo update do MVP
  readonly updateProfileButton: Locator;
  readonly successMessageTitle: Locator;

  /**
   * Construtor da classe UpdateProfilePage.
   * @param page - A instância da página (page) do Playwright.
   */
  constructor(page: Page) {
    this.page = page;

    // Mapeamento dos seletores do formulário de atualização de perfil
    this.phoneInput = page.locator('input[id="customer.phoneNumber"]');
    this.updateProfileButton = page.locator(
      'input[type="submit"][value="Update Profile"]'
    );
    this.successMessageTitle = page.locator("h1.title");
  }

  //---Métodos de Interação da Página (Actions) ---

  /**
   *Atualiza o campo de telefone no formulário de atualização de perfil.
   *@param phone - Novo valor do campo telefone.
   */
  async updatePhoneNumber(newPhoneNumber: string) {
    await this.phoneInput.clear();
    await this.phoneInput.fill(newPhoneNumber);
    await this.updateProfileButton.click();
  }

  /**
   * Obtém o título da página de sucesso.
   * Valida (assert) se a atualização foi realizada com sucesso.
   */
  async getSuccessTitleText() {
    return this.successMessageTitle.textContent();
  }
}
