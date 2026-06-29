const { ask } = require("./input");

async function multiply() {
    const num1 = Number(await ask("Enter first number:"));
    const num2 = Number(await ask("Enter second number:"));

    console.log("\nResult =", num1 * num2);
}

module.exports = multiply;