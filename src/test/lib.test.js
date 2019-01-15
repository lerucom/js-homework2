import {calculateDistance} from "../js/lib.js";

test('With the consumption of "9.9" and the amount of fuel "45.4" - the distance "459"', () => {
    const fuelConsumption = 9.9;
    const amountOfFuel = 45.4;
    const result = calculateDistance(fuelConsumption, amountOfFuel);

    expect(result).toBe(459);
});

test('With the consumption of "23.8" and the amount of fuel "15.2" - the distance "0"', () => {
    const fuelConsumption = 23.8;
    const amountOfFuel = 15.2;
    const result = calculateDistance(fuelConsumption, amountOfFuel);

    expect(result).toBe(64);
});

test('With the consumption of "0" and the amount of fuel "15.2" - the distance "0"', () => {
    const fuelConsumption = 0;
    const amountOfFuel = 15.2;
    let result = calculateDistance(fuelConsumption, amountOfFuel);
    expect(result).toBe(0);
});