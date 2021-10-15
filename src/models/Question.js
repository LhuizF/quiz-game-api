const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
    text: { type: String, required: true },
    image: { type: String, required: false, default: ''},
    theme: { type: mongoose.ObjectId, ref: 'theme', required: true },
    alternatives: { type: Array, required: true }
}, { versionKey: false });



module.exports = mongoose.model('question', questionsSchema);
