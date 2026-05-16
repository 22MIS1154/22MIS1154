const express = require("express");
const cors = require("cors");

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend server running successfully"
    });
});

app.use("/api/notifications", notificationRoutes);

module.exports = app;