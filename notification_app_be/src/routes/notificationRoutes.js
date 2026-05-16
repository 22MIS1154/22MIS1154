const express = require("express");

const router = express.Router();

const {
    sendNotificationController
} = require("../controllers/notificationController");

router.post("/send", sendNotificationController);

module.exports = router;