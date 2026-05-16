const express = require("express");
const cors = require("cors");

const schedulerRoutes = require("./routes/schedulerRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Vehicle Scheduler Running"
    });

});

app.use("/api/scheduler", schedulerRoutes);

module.exports = app;