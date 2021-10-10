const mongoose = require('mongoose');

const themesSchema = new mongoose.Schema({
    path: { type: String, required: true },
    name: { type: String, required: true },
    thumbnail: { type: String, required: true },
    questions: { type: Array, required: true }
});



module.exports = mongoose.model('themes', themesSchema);
