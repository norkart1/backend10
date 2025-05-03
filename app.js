require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const biodataRoutes = require("./routes/biodataRoutes");
const cronJobs = require("./services/cronJobs");

cronJobs.cleanupTask(); // Call the function instead of cronJobs.start()


const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", biodataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
