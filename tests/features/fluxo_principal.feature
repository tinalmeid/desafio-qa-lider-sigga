
Feature: Gestão de Conta de Usuário no Parabank
    Como Head de QA, 
    eu quero validar o fluxo E2E de um novo Usuário
    para garantir que as funcionalidades críticas (Registro, Login, Update) estão operando
    conforme o esperado, em linha com o plano de testes do MVP.

@mvp
Scenario: CT-01 - Fluxo E2E Principal (Registrar, Logar, Atualizar Perfil e Sair)
    Given que eu esteja na página de registro do Parabank
    When eu preencher o formulário de registro com dados válidos e únicos
    And eu confirmo o registro
    Then eu devo ver uma mensagem de boas-vindas e ser deslogado

    When eu fizer login com o usuário recém-criado
    Then eu devo ser autenticado e ver "Sumário das Contas"

    When eu navegar para a página de "Update Contact Info"
    And eu atualizar o campo "Phone #" com um novo número
    And eu submeter a atualização
    Then eu devo ver a mensagem de "Profile Update Successfully"

    When eu fizer logout da aplicação
    Then eu devo ser direcionado para a página inicial (deslogado)