const Themes = require('../models/Theme');

module.exports = {
    async index(req, res) {
        try {
            const themes = await Themes.find();
            return res.status(200).json(themes);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    },

    async show(req, res) {
        try{
            const { theme } = req.params
            const selectedTheme = await Themes.find({ path: theme })
            return res.status(200).json(selectedTheme);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
        
    }
};
