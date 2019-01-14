export function calculateDistance(fuelConsumption, amountOfFuel) {
    let result;
    // условие, если расход топлива > 0 и объем топлива >= 0
    if (fuelConsumption > 0 && amountOfFuel >= 0) {
        result = Math.round(amountOfFuel * 100 / fuelConsumption);
    } else {
        result = 0; // или вернет 0
    }
    return result;
}