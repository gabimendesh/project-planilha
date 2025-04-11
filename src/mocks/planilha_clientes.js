const clients = [
    { id: 1, name: 'Maria Silva', email: 'maria@email.com', createdAt: new Date() },
    { id: 2, name: 'João Souza', email: 'joao@email.com', createdAt: new Date() },
    { id: 3, name: 'Ana Lima', email: 'ana@email.com', createdAt: new Date() },
    { id: 4, name: 'Gabriel Silva', email: 'gab@email.com', createdAt: new Date() },
    { id: 5, name: 'Maria Silva', email: 'maria@email.com', createdAt: new Date() },
    { id: 6, name: 'João Souza', email: 'joao@email.com', createdAt: new Date() },
    { id: 9, name: 'Gabriel Silva', email: 'gab@email.com', createdAt: new Date() },
    { id: 7, name: 'Ana Lima', email: 'ana@email.com', createdAt: new Date() },
    { id: 8, name: 'Gabriel Silva', email: 'gab@email.com', createdAt: new Date() },
    { id: 10, name: 'João Souza', email: 'joao@email.com', createdAt: new Date() },
]

const columns = [
    { header: 'ID', key: 'id' },
    { header: 'Nome', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Criado em', key: 'createdAt' }
]

module.exports = { clients, columns }
