const clients = [
    { id: 1, nome: 'Maria Silva', email: 'maria@email.com', createdAt: new Date() },
    { id: 2, nome: 'João Souza', email: 'joao@email.com', createdAt: new Date() },
    { id: 3, nome: 'Ana Lima', email: 'ana@email.com', createdAt: new Date() },
    { id: 4, nome: 'Gabriel Silva', email: 'gab@email.com', createdAt: new Date() },
    { id: 5, nome: 'Maria Silva', email: 'maria@email.com', createdAt: new Date() },
    { id: 6, nome: 'João Souza', email: 'joao@email.com', createdAt: new Date() },
    { id: 9, nome: 'Gabriel Silva', email: 'gab@email.com', createdAt: new Date() },
    { id: 7, nome: 'Ana Lima', email: 'ana@email.com', createdAt: new Date() },
    { id: 8, nome: 'Gabriel Silva', email: 'gab@email.com', createdAt: new Date() },
    { id: 10, nome: 'João Souza', email: 'joao@email.com', createdAt: new Date() },
]

const columns = [
    { header: 'ID', key: 'id' },
    { header: 'Nome', key: 'nome' },
    { header: 'Email', key: 'email' },
    { header: 'Criado em', key: 'createdAt' }
]

module.exports = { clients, columns }
