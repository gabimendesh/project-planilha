const formatUsers = require('../utils/formatUsers');

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar usuários. Status: ${response.status} - ${response.statusText}`
      );
    }

    const users = await response.json();
    return formatUsers(users);
  } catch (error) {
    console.error('Erro na requisição:', error.message);
    throw new Error(
      'Não foi possível obter os dados dos usuários. Tente novamente mais tarde.'
    );
  }
}

module.exports = {
  getUsers,
};
