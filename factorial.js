const { ask } = require("./input");

async function factorial() {
    const num = Number(await ask("Enter a number: "));

    if (num < 0) {
        console.log("Factorial is not defined for negative numbers");
        return 0;
    }

    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    console.log(`${num}! = ${fact}`);
}

module.exports = factorial;