<<<<<<< HEAD
const {ask} = require("./input");

async function percentage() {
    const a = Number(await ask("Enter a: "));
    const b = Number(await ask("Enter b: "));

    console.log(`Result = $(a/b *100)%`);
}

=======
const {ask} = require("./input");

async function percentage() {
    const a = Number(await ask("Enter a: "));
    const b = Number(await ask("Enter b: "));

    console.log(`Result = $(a/b *100)%`);
}

>>>>>>> 108f6d1876a89ff199b828a4586bd6667e3e3def
module.exports = percentage;