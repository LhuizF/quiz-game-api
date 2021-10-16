const Record = require('../models/Record');

module.exports = {
    // retorna todos os recordes no banco de dados
    async index(req, res) {
        try {
            const records = await Record.find().sort({score: -1});
            return res.status(200).json(records);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    },

    // adiciona um novo recorde no banco de dado
    async create(req, res) {
        try{
            
            const records = new Record(req.body);
            await records.save();

            return res.status(201).json({
                message: 'Recorde adicionado com sucesso.'
            });
        }
        catch (e){
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    },

    // retorna todas as recorde de um tema especifico
    async show(req, res) {
        try {
            if(!req.params.theme) return res.render('error');
            const { theme } = req.params;
            const records = await Record.find({theme}).sort({score: -1});
            return res.status(200).json(records);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    },

    //exclui um recorde no banco de dado
    async delete(req, res) {
        try {
            if(!req.params.id) return res.render('error');
            const { id } = req.params;
            const removeRecord = await Record.findOneAndDelete({_id: id})
            if(!removeRecord)  return res.render('error');
            return res.status(201).json({
                message: 'Recorde excluido com sucesso.'
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    }
};
