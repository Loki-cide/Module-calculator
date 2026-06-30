const {ask} = require("./input");

async function random(){
    const num1 = Number(await ask("Enter minimum number: "));
    const num2 = Number(await ask("Enter maximum number: "));

    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(`Random Number: ${random}`);
}

module.exports = random;