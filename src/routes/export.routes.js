const express = require('express')
const router = express.Router()
const controller = require('../controllers/export.controller')

router.get('/planilha/export', controller.exportarClientes)

module.exports = router