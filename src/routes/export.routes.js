const express = require('express');
const router = express.Router();
const controller = require('../controllers/export.controller');

router.get('/export/xlsx', controller.xlsxExportClients);
router.get('/export/csv', controller.csvExportClients);

module.exports = router;
