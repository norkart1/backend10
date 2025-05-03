const Biodata = require("../models/Biodata");

exports.submitBiodata = async (req, res) => {
    try {
        const biodata = await Biodata.create(req.body);
        res.status(201).json({ success: true, data: biodata });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getBiodata = async (req, res) => {
    try {
        const biodataList = await Biodata.find();
        res.status(200).json({ success: true, data: biodataList });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
