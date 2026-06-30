const { ask } = require("./input")

async function unit() {
    console.log("Unit Coversion\n");
    console.log("1: Celsius to Fahrenheit");
    console.log("2: Fahrenheit to Celsius");
    console.log("3: Kilometer to Miles");
    console.log("4: Miles to Kilometer");
    console.log("5: Kilogram to Pound");
    console.log("6: Pound to Kilogram");
    console.log("7: Meter to Feet");
    console.log("8: Feet to Meter");

    const choice = await ask("Choose an operation: ");

    let value, result;

    if (choice == 1) {
        value = Number(await ask("Enter temperature in Celsius: "));
        result = (value * 9 / 5) + 32;
        console.log(`${value} °C = ${result.toFixed(2)} °F`);
    }

    else if (choice == 2) {
        value = Number(await ask("Enter temperature in Fahrenheit: "));
        result = (value - 32) * 5 / 9;
        console.log(`${value} °F = ${result.toFixed(2)} °C`);
    }

    else if (choice == 3) {
        value = Number(await ask("Enter kilometers: "));
        result = value * 0.621371;
        console.log(`${value} km = ${result.toFixed(2)} miles`);
    }

    else if (choice == 4) {
        value = Number(await ask("Enter miles: "));
        result = value / 0.621371;
        console.log(`${value} miles = ${result.toFixed(2)} km`);
    }

    else if (choice == 5) {
        value = Number(await ask("Enter kilograms: "));
        result = value * 2.20462;
        console.log(`${value} kg = ${result.toFixed(2)} lbs`);
    }

    else if (choice == 6) {
        value = Number(await ask("Enter pounds: "));
        result = value / 2.20462;
        console.log(`${value} lbs = ${result.toFixed(2)} kg`);
    }

    else if (choice == 7) {
        value = Number(await ask("Enter meters: "));
        result = value * 3.28084;
        console.log(`${value} m = ${result.toFixed(2)} ft`);
    }

    else if (choice == 8) {
        value = Number(await ask("Enter feet: "));
        result = value / 3.28084;
        console.log(`${value} ft = ${result.toFixed(2)} m`);
    }

    else {
        console.log("Invalid choice");
    }
}

module.exports = unit;