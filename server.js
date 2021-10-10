require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const records = require('./src/controller/records');
const themes = require('./src/controller/themes');

const app = express();
const port = process.env.APPPORT;

mongoose.connect(process.env.CONNECDATABASE ,{ useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() =>{
        console.log('Data Base okay');
        app.emit('okay');
    })
    .catch(e => console.log(e));

app.use(express.json());

app.get('/', (req, res) => {
    res.json('index');
})

app.get('/records', records.index);
app.post('/records', records.create);

app.get('/themes', themes.index);

app.on('okay', () => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Host: http://localhost:${port}`);
        console.log('Servidor Online');
    });
});
