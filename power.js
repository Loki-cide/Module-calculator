const {ask} = require("./input");

async function power() {
    const base = Number(await ask("Enter the base: "));
    const expo = Number(await ask("Enter the exponent: "));

    console.log(`Result = ${Math.pow(base, expo)}`);
}

module.exports = power;