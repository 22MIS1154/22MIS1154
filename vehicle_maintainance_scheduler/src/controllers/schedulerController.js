const {
    optimizeSchedule
} = require("../services/schedulerService");

const getOptimizedSchedule = async (req, res) => {

    try {

        const result = await optimizeSchedule();

        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    getOptimizedSchedule
};