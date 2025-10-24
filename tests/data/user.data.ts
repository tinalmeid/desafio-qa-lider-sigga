/**
 * Massa de dados para a Suite de Testes do Sigga MVP.
 * Utiliza TypeScript para definir os dados do usuário.
 * Objetivo: Fornecer dados consistentes e reutilizáveis para os testes automatizados.
 */

//Gera um usuário válido para o fluxo de registro
const timestamp = Date.now();
const uniqueUsername = `sigga_user_${timestamp}`;
const defaultPassword = `SenhaSegura!23`;

//Dados para o formulário de registro
export const registrationData = {
  firstName: "Teste",
  lastName: "Sigga",
  address: "Rua das Flores, 123",
  city: "Belo Horizonte",
  state: "MG",
  zipCode: "30123-456",
  phone: "(31) 91234-5678",
  ssn: "123456789",
  username: uniqueUsername,
  password: defaultPassword,
};

//Dados login separado para teste de login
export const loginCredentials = {
  username: uniqueUsername,
  password: defaultPassword,
};
