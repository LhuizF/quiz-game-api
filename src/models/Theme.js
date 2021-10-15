const mongoose = require('mongoose');

const themesSchema = new mongoose.Schema({
    path: { type: String, required: true },
    name: { type: String, required: true },
    thumbnail: { type: String, required: true },
    questions: { type: mongoose.ObjectId, ref: 'theme', required: true }
});



module.exports = mongoose.model('theme', themesSchema);
