const Question = require('../models/Question');

module.exports = {
    // retorna todas as perguntas no banco de dado
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

    // criar pergunta
    async create(req, res) {
        try{            
            const question = new Question(req.body);
            await question.save();
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

    // retorna todas as perguntas de um tema especifico
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
