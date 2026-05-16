const {
    fetchDepots,
    fetchVehicles
} = require("./apiService");

const optimizeSchedule = async () => {

    const depots = await fetchDepots();

    const vehicles = await fetchVehicles();

    const depot = depots[0];

    let remainingHours = depot.MechanicHours;

    vehicles.sort((a, b) => b.Impact - a.Impact);

    const selectedVehicles = [];

    for (const vehicle of vehicles) {

        if (vehicle.Duration <= remainingHours) {

            selectedVehicles.push(vehicle);

            remainingHours -= vehicle.Duration;

        }

    }

    return {
        depotId: depot.ID,
        totalMechanicHours: depot.MechanicHours,
        remainingHours,
        selectedVehicles
    };

};

module.exports = {
    optimizeSchedule
};