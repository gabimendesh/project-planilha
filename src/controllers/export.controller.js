const { generateExcel } = require('../services/planilha.service');
const { getUsers } = require('../services/user.service');
const formatHeader = require('../utils/formatHeader');

exports.exportarClientes = async (req, res) => {
  const users = await getUsers();

  const columns = Object.keys(users[0]).map((key) => ({
    header: formatHeader(key),
    key,
  }));
  console.log(users, columns);

  const excelBuffer = await generateExcel({ infos: users, columns });
  console.log(await getUsers());

  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  );
  res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
  res.send(excelBuffer);
};
