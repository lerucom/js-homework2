import {calculateDistance} from "./lib.js";

const fuelConsumptionEl = document.getElementById('fuelConsumption');
const amountOfFuelEl = document.getElementById('amountOfFuel');
const resultEl = document.getElementById('result');
const calculateEl = document.getElementById('calculate');

function reactToClick () {
    const fuelConsumption = parseInt(fuelConsumptionEl.value);
    const amountOfFuel = parseInt(amountOfFuelEl.value);
    resultEl.textContent = calculateDistance(fuelConsumption, amountOfFuel);
}

calculateEl.addEventListener('click', reactToClick);