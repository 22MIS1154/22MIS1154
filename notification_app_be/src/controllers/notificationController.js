const { sendNotification } = require("../services/notificationService");

const sendNotificationController = async (req, res) => {
    try {

        const result = await sendNotification(req.body);

        return res.status(200).json({
            success: true,
            message: result.message,
            data: result.data
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    sendNotificationController
};