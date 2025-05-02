const { generateExcel } = require('../services/planilha.service');
const { getUsers } = require('../services/user.service');
const formatHeader = require('../utils/formatHeader');

exports.xlsxExportClients = async (req, res) => {
  try {
    const users = await getUsers();

    if (!users.length) {
      return res.status(204).send();
    }

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
  } catch (error) {
    console.error('Error export xlsx:', err);
    res.status(500).json({ error: 'Error export xlsx' });
  }
};

exports.csvExportClients = async (req, res) => {
  try {
    const users = await getUsers();

    if (!users.length) {
      return res.status(204).send();
    }

    const columns = Object.keys(users[0]).map((key) => ({
      header: formatHeader(key),
      key,
    }));

    // o csv é montado por strings e cada coluna é separada por uma vírgula

    const headers = columns.map((col) => col.header).join(',');
    const rows = users.map((user) => Object.values(user).join(',')).join('\n');

    console.log(headers);
    console.log(rows);

    const csv = `${headers}\n${rows}`;
    console.log(csv);

    // TODO: adicionar estilo pra csv (?)

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=report.csv');
    res.send(csv);
  } catch (err) {
    console.error('Error export csv:', err);
    res.status(500).json({ error: 'Error export csv' });
  }
};
