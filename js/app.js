import {calculateDistance} from "./lib.js";

const fuelConsumptionEl = document.getElementById('fuel-consumption');
const amountOfFuelEl = document.getElementById('amount-of-fuel');
const resultEl = document.getElementById('result');
const calculateEl = document.getElementById('calculate');

function reactToClick () {
    const fuelConsumption = parseFloat(fuelConsumptionEl.value);
    const amountOfFuel = parseFloat(amountOfFuelEl.value);
    resultEl.textContent = calculateDistance(fuelConsumption, amountOfFuel);
}

calculateEl.addEventListener('click', reactToClick);