const sendNotification = async (data) => {
    return {
        success: true,
        message: "Notification sent successfully",
        data
    };
};

module.exports = {
    sendNotification
};