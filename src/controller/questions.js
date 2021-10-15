const Question = require('../models/Question');

module.exports = {
    async index(req, res) {
        try {
            const questions = await Question.find().populate('theme');
            return res.status(200).json(questions);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    },

    async create(req, res) {
        try{
            
            const questions = new Question(req.body);
            await questions.save();
            return res.status(201).json({
                message: 'Questão adicionado com sucesso.'
            });
        }
        catch (e){
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    },

    async show(req, res) {
        try {
            const { themeId }  = req.params;
            const questions = await Question.find({theme: themeId}).populate('theme');
            return res.status(200).json(questions);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    }
};
