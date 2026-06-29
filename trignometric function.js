const { ask } = require("./input");

async function trigonometry() {
    console.log("\nTrigonometric Calculator");
    console.log("1. sin");
    console.log("2. cos");
    console.log("3. tan");
    console.log("4. cot");
    console.log("5. sec");
    console.log("6. cosec");

    const choice = await ask("Choose a function (1-6): ");
    const angle = Number(await ask("Enter the angle in degrees: "));

    const radians = angle * (Math.PI / 180);

    if (choice == 1) {
        console.log(`sin(${angle}) = ${Math.sin(radians)}`);
    }
    else if (choice == 2) {
        console.log(`cos(${angle}) = ${Math.cos(radians)}`);
    }
    else if (choice == 3) {
        console.log(`tan(${angle}) = ${Math.tan(radians)}`);
    }
    else if (choice == 4) {
        console.log(`cot(${angle}) = ${Math.cot(radians)}`);
    }
    else if (choice == 5) {
        console.log(`sec(${angle}) = ${Math.sec(radians)}`);
    }
    else if (choice == 6) {
        console.log(`cosec(${angle}) = ${Math.cosec(radians)}`);
    }
    else {
        console.log("Invalid choice.");
    }
}

module.exports = trigonometry;