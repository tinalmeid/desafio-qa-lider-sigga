# Plano de Testes: MVP Desafio Técnico QA Lead (Sigga)

## 1. Objetivo
Este documento detalha a estratégia de testes para o MVP (Minimum Viable Product) técnico.

## 2. Aplicação Alvo
* **URL:** `https://parabank.parasoft.com/`
A escolha desta aplicação se deu por ela permitir um fluxo de CRUD mais completo e profissional.

## 3. Escopo do Teste 
Para este MVP, o foco está no "caminho feliz" do fluxo principal de um novo usuário.

* **Funcionalidade: Registro (Create)**
    * Registrar um novo usuário
* **Funcionalidade: Autenticação (Login/Logout)**
    * Realizar login com o usuário recém-criado.
    * Realizar logout.
* **Funcionalidade: Gestão de Contato (Update/Read)**
    * Acessar a tela de atualização de perfil.
    * Atualizar um dado (telefone).
    * Validar que o dado foi salvo corretamente.

## 4. Fora do Escopo
Os seguintes itens estão fora do escopo *deste MVP* (mas poderiam fazer parte de um plano completo).

    * Testes de API (foco no E2E)
    * Testes Não funcionais (Performance, Segurança).
    * Testes de compatibilidade (múltiplos navegadores/resoluções)
    * Fluxos negativos complexos (como: recuperação de senha, validação de todos os campos do formulário, entre outros).

## 5. Estratégia de Automação

* **Framework:** Playwright (com TypeScript).
* **Boas Práticas:**
    * **Padrão de Projeto:** Page Object Model (POM), para desacoplar os seletores da lógica de teste, garantindo a alta manutenibilidade.
    * **Seletores:** Uso de seletores de dados e IDs, evitando seletores frágeis (como XPath completo).
    * **CI/CD:** Integração com GitHub Actions para execução automatizada.

## 6. Cenários Priorizados para o MVP
A automação focará no seguinte fluxo E2E, que combina os elementos do CRUD:

* **CT-01 (Fluxo E2E Principal):** Registrar novo usuário, fazer login, Atualizar o telefone e fazer logout.