const { ask } = require("./input");

async function coin() {
    const coin = Math.random() < 0.5 ? "Heads" : "Tails";

    console.log(`Result: ${coin}`);
}

module.exports = coin;