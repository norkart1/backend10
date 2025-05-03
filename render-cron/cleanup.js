require("dotenv").config();
const connectDB = require("../config/database");
const Biodata = require("../models/Biodata");

const runCleanup = async () => {
    try {
        await connectDB();
        const outdatedData = await Biodata.deleteMany({ createdAt: { $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } });
        console.log(`Deleted ${outdatedData.deletedCount} outdated biodata entries.`);
        process.exit(0);
    } catch (error) {
        console.error("Cron job error:", error);
        process.exit(1);
    }
};

runCleanup();
