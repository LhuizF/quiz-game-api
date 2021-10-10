const Record = require('../models/Record');

module.exports = {
    async index(req, res) {
        try {
            const records = await Record.find();
            return res.status(200).json({ records });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    },

    async create(req, res) {
        try{
            
            const records = new Record(req.body);
            await records.save();

            return res.status(201).json({
                message: 'Criado com sucesso'
            });
        }
        catch (e){
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    }
};
