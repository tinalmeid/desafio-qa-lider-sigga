import { defineConfig, devices } from "@playwright/test";

/**
 * Configurações do Playwright para o projeto de testes automatizados.
 */
export default defineConfig({
  // Define o diretório raiz dos testes (specs)  estão localizados.
  testDir: "./tests",
  //Relatório HTML gerado após a execução dos testes.
  reporter: [["html", { open: "never" }]],
  // Configurações globais para todos os testes.
  use: {
    // Define a URL base para os testes.
    baseURL: "https://parabank.parasoft.com/parabank/",
    // Habilita a captura de rastreamento para depuração.
    trace: "on-first-retry",
  },
  // Para este MVP foco foi apenas no 'chromium'
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  //Configuração de CI (Integração Contínua) para execução
  //Em ambientes como GitHub Actions, padrão 'retries e 'workers'.
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
});
