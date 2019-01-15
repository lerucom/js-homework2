export function calculateDistance(fuelConsumption, amountOfFuel) {
    // условие, если расход топлива > 0 и объем топлива >= 0
    if (fuelConsumption > 0 && amountOfFuel >= 0) {
        return Math.round(amountOfFuel * 100 / fuelConsumption);
    }
    return 0;
}