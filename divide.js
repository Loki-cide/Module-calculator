const {ask} = require("./input");

async function divide() {
    const num1 = Number(await ask("Enter first number:"));
    const num2 = Number(await ask("Enter second number:"));

    if (num2 === 0){
        console.log("Cannot divide by zero");
    }
    else{
        console.log("\nResult =", num1 / num2);
    }
}

module.exports = divide;