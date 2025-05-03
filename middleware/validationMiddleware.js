exports.validateBiodata = (req, res, next) => {
    const { name, age, email } = req.body;
    if (!name || !age || !email) return res.status(400).json({ success: false, message: "All fields are required" });
    next();
};

