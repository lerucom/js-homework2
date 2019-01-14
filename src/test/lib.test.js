import {calculateDistance} from "../js/lib.js";

test('calculate distance that can drive', () => {
    const fuelConsumption = 9.9;
    const amountOfFuel = 45.4;
    const result = calculateDistance(fuelConsumption, amountOfFuel);

    expect(result).toBe(459);
});

test('calculate distance that can drive', () => {
    const fuelConsumption = 23.8;
    const amountOfFuel = 15.2;
    const result = calculateDistance(fuelConsumption, amountOfFuel);

    expect(result).toBe(64);
});

test('calculate distance that can drive', () => {
    const fuelConsumption = 0;
    const amountOfFuel = 15.2;
    let result = calculateDistance(fuelConsumption, amountOfFuel);
    expect(result).toBe(0);
});