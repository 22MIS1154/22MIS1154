const axios = require("axios");

const BASE_URL = "http://4.224.186.213/evaluation-service";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ0YW5ndXR1cmlzaGFyYW5pQGdtYWlsLmNvbSIsImV4cCI6MTc3ODkzMjg2NiwiaWF0IjoxNzc4OTMxOTY2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiODRlN2E4MzMtM2Y5NS00YTgzLWEyMjItMTU2YjI0YzNlOWUxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidGFuZ3V0dXJpX3NoYXJhbmkiLCJzdWIiOiJkMjI5NGRjNy1lNmZlLTQwNGEtYWE2Yi1jNGE1Mzc5ZTAzNWIifSwiZW1haWwiOiJ0YW5ndXR1cmlzaGFyYW5pQGdtYWlsLmNvbSIsIm5hbWUiOiJ0YW5ndXR1cmlfc2hhcmFuaSIsInJvbGxObyI6IjIybWlzMTE1NCIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6ImQyMjk0ZGM3LWU2ZmUtNDA0YS1hYTZiLWM0YTUzNzllMDM1YiIsImNsaWVudFNlY3JldCI6IlJYaHZwTUROdm5xYWJVeHQifQ.uSAyxGNwZBcdUutrYKj_YJU90cJ4jpb1Ymsi-NvG9EY";

const headers = {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json"
};

const fetchDepots = async () => {

    const response = await axios.get(
        `${BASE_URL}/depots`,
        { headers }
    );

    return response.data.depots;
};

const fetchVehicles = async () => {

    const response = await axios.get(
        `${BASE_URL}/vehicles`,
        { headers }
    );

    return response.data.vehicles;
};

module.exports = {
    fetchDepots,
    fetchVehicles
};