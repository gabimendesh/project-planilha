require('dotenv').config()
const express = require('express')
const app = express()
const exportRoutes = require('./routes/export.routes')

app.use(express.json())
app.use('/api', exportRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} >>>>>>`)
})