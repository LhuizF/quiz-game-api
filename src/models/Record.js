const mongoose = require('mongoose');

const optionsDate = {minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
const optionsTiem = {timeStyle: 'short', timeZone: 'America/Sao_Paulo'}

const recordsSchema = new mongoose.Schema({
    nick: { type: String, required: true },
    email: { type: String, required: false, default: '' },
    theme: { type: Array, required: true },
    hits: { type: String, required: true },
    time: { type: String, required: true },
    score: { type: Number, required: true },
    date: { type: String, default: () => {
            const now = new Date();
            return `${now.toLocaleDateString('pt-br', optionsDate)} ${now.toLocaleTimeString('pt-br', optionsTiem)}`;            
        }
    }, 
},  { versionKey: false });

module.exports = mongoose.model('record', recordsSchema);
