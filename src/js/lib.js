export function calculateDistance(fuelConsumption, amountOfFuel) {
    if (fuelConsumption > 0 && amountOfFuel >= 0) {
        return Math.round(amountOfFuel * 100 / fuelConsumption);
    }
    return 0;
}