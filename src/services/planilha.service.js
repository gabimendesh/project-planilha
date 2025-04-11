const ExcelJS = require('exceljs')

async function generateExcel({ dados, columns }) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Relatório')

  worksheet.columns = columns.map(col => ({ header: col.header, key: col.key, width: 25 }))

  dados.forEach(dado => worksheet.addRow(dado))

  worksheet.getRow(1).eachCell(cell => {
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' } }
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF1F497D' }
    }
    cell.alignment = { vertical: 'middle', horizontal: 'center' }
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    }
  })

  const buffer = await workbook.xlsx.writeBuffer()
  return buffer
}

module.exports = {
  generateExcel
}