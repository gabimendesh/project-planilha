# 📝 Projeto: Gerador de Planilhas

Este projeto tem como objetivo gerar arquivos Excel (.xlsx), utilizando Node.js e a biblioteca [ExcelJS](https://www.npmjs.com/package/exceljs).

---

## ✅ Funcionalidades atuais

- Consulta de dados de usuários (mock - [JSONPlaceholder](https://jsonplaceholder.typicode.com/users))
- Formatação de dados (endereços, empresas, etc)
- Geração de planilha Excel (.xlsx) com estilo básico
- Download do arquivo gerado

---

## 📌 To-Do: Melhorias e Evoluções

### 🔄 Dinamismo e Filtros
- [ ] Nome da planilha dinâmica
- [ ] Adicionar suporte a filtros (cidade, nome, empresa, etc)
- [ ] Permitir selecionar colunas dinâmicas para exportação
- [ ] Receber parâmetros de exportação via query string (?)

### 📁 Suporte a Novos Formatos
- Adicionar opções de exportação
- [ ] Exportar como `.csv`
- [ ] Exportar como `.pdf`

### 🎨 Estilo e Layout da Planilha (se possível)
- [ ] Inserir logo ou cabeçalho personalizado (?)
- [ ] Congelar linha de cabeçalho (opcional)
- [ ] Ajustar larguras automaticamente
- [ ] Aplicar formatações condicionais (ex: destaque por cidade) (?)

### 📤 Distribuição do Arquivo
- [ ] Enviar planilha por e-mail (?)
- [ ] Salvar planilhas geradas em um bucket S3 (?)

### 🌐 Interface Web
- [ ] Criar frontend simples para selecionar filtros e gerar planilha
- [ ] Adicionar autenticação (opcional) (?)

### ⏱️ Agendamentos e Histórico
- [ ] Agendar geração automática (?)
- [ ] Salvar log/histórico de exportações realizadas (?)

### 🔍 Testes
- [ ] Criar testes unitários para:
  - Funções de formatação (`formatUsers`, `formatHeader`, `controller`, `services`)
  - Validação dos dados de entrada
- [ ] Testes de integração para geração e retorno do arquivo

---

## 🧪 Documentação da API (Swagger)

- [ ] 📎Criar a documentação no swagger
