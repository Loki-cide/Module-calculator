const {ask} = require("./input");

async function percentage() {
    const a = Number(await ask("Enter a: "));
    const b = Number(await ask("Enter b: "));

    console.log(`Result = $(a/b *100)%`);
}


module.exports = percentage;