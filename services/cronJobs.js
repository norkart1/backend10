const cron = require("node-cron");
const Biodata = require("../models/Biodata");
const logger = require("../utils/logger");

const cleanupTask = () => {
    cron.schedule("0 0 * * *", async () => {
        try {
            const outdatedData = await Biodata.deleteMany({ createdAt: { $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } });
            logger.info(`Deleted ${outdatedData.deletedCount} outdated biodata records.`);
        } catch (error) {
            logger.error("Error running cleanup job:", error);
        }
    });
};

module.exports = { cleanupTask };
