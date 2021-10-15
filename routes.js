const express = require('express');
const route = express.Router();

const records = require('./src/controller/records');
const themes = require('./src/controller/themes');
const questions = require('./src/controller/questions');

route.get('/records', records.index);
route.post('/records', records.create);
route.get('/records/:theme', records.show);

route.get('/themes', themes.index);
route.get('/themes/:theme', themes.show);

route.get('/questions', questions.index);
route.post('/questions', questions.create);
route.get('/questions/:themeId', questions.show);

module.exports = route;
