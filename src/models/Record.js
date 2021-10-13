const mongoose = require('mongoose');

const recordsSchema = new mongoose.Schema({
    nick: { type: String, required: true },
    email: { type: String, required: false, default: '' },
    theme: { type: Array, required: true },
    hits: { type: String, required: true },
    time: { type: String, required: true },
    score: { type: Number, required: true },
    date: {
        type: String,
        default: () => {
            const now = new Date();
            return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        }
    }
});



module.exports = mongoose.model('records', recordsSchema);
