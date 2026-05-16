const axios = require("axios");
const https = require("https");
require("dotenv").config();

const Log = async (stack, level, pkg, message) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/logs`,
      {
        stack,
        level,
        packageName: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      }
    );

    return response.data;

  } catch (error) {
    return error.response?.data || error.message;
  }
};

module.exports = Log;