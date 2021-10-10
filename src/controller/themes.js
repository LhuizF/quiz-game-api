const Themes = require('../models/Theme');

module.exports = {
    async index(req, res) {
        try {
            const themes = await Themes.find();
            return res.status(200).json({ themes });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.message
            });
        }
    }
};
