const { ask } = require("./input");

async function root() {
    const num = Number(await ask("Enter the number: "));
    const root = Number(await ask("Enter the root: "));

    console.log(`Result = ${Math.pow(num, 1 / root)}`);
}

module.exports = root;