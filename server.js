require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const app = express();
const port = process.env.APPPORT;

mongoose.connect(process.env.CONNECDATABASE ,{ useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() =>{
        console.log('Data Base okay');
        app.emit('okay');
    })
    .catch(e => console.log(e));

const whiteList = ['https://lhuizf.github.io', 'http://localhost:3000'];

app.use(cors({
    origin: (origin, callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.json('index');
})

app.use(routes)


app.on('okay', () => {
    app.listen(process.env.PORT || port, () => {
        console.log(`Host: http://localhost:${port}`);
        console.log('Servidor Online');
    });
});
