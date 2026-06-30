const { ask } = require("./input");

async function prime() {
    const num = Number(await ask("Enter a positive integer: "));

    const num = Number(await ask("Enter a positive integer: "));

    if (num < 2) {
        console.log(`${num} is not a prime number.`);
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} is a prime number.`);
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

module.exports = prime;