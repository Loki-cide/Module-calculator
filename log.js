const {ask} = require("./input");

async function log() {
    const num = Number(await ask("Enter a number: "));

    console.log(`Result = ${Math.log(num)}`);
}

module.exports = log;