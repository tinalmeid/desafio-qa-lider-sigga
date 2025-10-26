# 🤖 Desafio Técnico QA Lead - Automação E2E (Sigga)

<div align="center">
    <img src="https://img.shields.io/badge/Framework-Playwright-brightgreen?logo=playwright" alt="Framework Playwright">
    <img src="https://img.shields.io/badge/Linguagem-TypeScript-blue?logo=typescript&logoColor=white" alt="Linguagem TypeScript">
    <img src="https://github.com/tinalmeid/desafio-qa-lider-sigga/actions/workflows/playwright.yml/badge.svg" alt="Status da Build (CI/CD">
</div>

## 💻 Sobre o Projeto

Este projeto é um MVP (Minimum Viable Product) de automação de testes web, desenvolvido como resposta ao Desafio Técnico para liderança de QA da Sigga, focado em resolver os desafios propostos (como baixa cobertura e falta de padronização) através de boas práticas.

O objetivo é demonstrar uma arquitetura de testes robusta, escalável e de fácil manutenção.

## 🎯 Estratégia de QA

Antes da implementação técnica, foi elaborado um planejamento de testes. Neste, é detalhado a arquitetura, o escopo do MVP e a estratégia dos cenários mapeados para a automação do CRUD.

**Consulte o Plano de Testes completo aqui: [PLANO_DE_TESTES.MD](./PLANO_DE_TESTES.MD)**

## 🛠️ Tecnologias Utilizadas

- **Framework:** Playwright
- **Linguagem:** TypeScript
- **Padrão de Projeto:** Page Object Model (POM)
- **Estratégia de Dados:** Massa de Dados desacoplada (Data-Driven)
- **Gerenciador de Pacotes:** NPM
- **CI/CD:** Github Actions (configurado em `.github/workflows/playwright.yml`)
- **Qualidade de Código:** SonarCloud (configurado em `sonar-project.properties`)

## 📝 Como Usar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

### 📋 Pré-requisitos

É necessário ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) instalado na máquina.

### ⚙️ Instalação e Configuração

1. **Clone o repositório:**

```bash
git clone https://github.com/tinalmeid/desafio-qa-lider-sigga
cd desafio-qa-lider-sigga
```

2. **Instale as dependências do NPM:**

   (Para Instalar o Playwright e o TypeScript definido no [package.json](package.json))

```bash
npm install
```

3. **Instale os navegadores do Playwright:**
   (Para baixar o Chromium, que é necessário para a execução)

```bash
npx playwright install
```

### ⚡ Executando os Testes

O projeto está configurado com scripts NPM (Node Package Manager) para facilitar a execução.

#### Modo "Headed" (Recomendado)

Comando principal.

Executa o fluxo completo E2E completo [sigga-mvp.spec.ts](./tests/sigga-mvp.spec.ts) **exibindo o browser**, para que possa assistir a automação em tempo real (Login + CRUD).

```bash
npm run test:headed
```

### Modo "Headless" (CI)

Este comando executa o teste em segundo plano **sem browser**, como em um servidor CI

```bash
npm test
```

### 📊 Visualizar Relatório dos Testes

Após a execução, é possível visualizar o relatório em html interativo do Playwright com o seguinte comando:

```bash
npx playwright show-report
```

## 📂 Estrutura do Projeto

A arquitetura do projeto foi desenhada para ser limpa, escalável e seguindo os princípios do POM:

- [playwright.config.ts](playwright.config.ts): Arquivo de configuração principal do Playwright, onde a baseURL do [projeto](https://parabank.parasoft.com/parabank/) a ser testado e seus navegadores são definidos.
- [package.json](package.json): Gerencia as dependências do projeto e os scripts de execução.
- tests/
  - [sigga-mvp.spec.ts](./tests/sigga-mvp.spec.ts): Arquivo de testes (spec) principal. Contem a lógica do fluxo (o "o quê") e as validações (asserts).
  - pages/: Contém as classes Page Object que encapsula os seletores e os métodos de cada página ("o como") -> [register](./tests/pages/register.page.ts), [login](./tests/pages/login.page.ts), [main-account](./tests/pages/main-account.page.ts), [update-profile](./tests/pages/update-profile.page.ts).
  - data/: Contém a massa de dados estática, permitindo que os testes sejam Data-driven -> [user.data](./tests/data/user.data.ts).
- [PLANO_DE_TESTES.MD](./PLANO_DE_TESTES.MD): Documentação que define a estratégia de teste para o escopo do MVP.
