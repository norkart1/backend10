const express = require("express");
const { submitBiodata, getBiodata } = require("../controllers/biodataController");
const { validateBiodata } = require("../middleware/validationMiddleware");

const router = express.Router();

router.post("/biodata", validateBiodata, submitBiodata);
router.get("/biodata", getBiodata);

module.exports = router;
