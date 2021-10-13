const express = require('express');
const route = express.Router();

const records = require('./src/controller/records');
const themes = require('./src/controller/themes');

route.get('/records', records.index);
route.post('/records', records.create);
route.get('/records/:theme', records.show);

route.get('/themes', themes.index);
route.get('/themes/:theme', themes.show);

module.exports = route;
