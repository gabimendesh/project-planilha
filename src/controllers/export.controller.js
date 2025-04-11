const { clients, columns } = require('../mocks/planilha_clientes')
const { generateExcel } = require('../services/planilha.service')

exports.exportarClientes = async (req, res) => {

  const excelBuffer = await generateExcel({ dados: clients, columns })

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.setHeader('Content-Disposition', 'attachment; filename=clientes.xlsx')
  res.send(excelBuffer)
}