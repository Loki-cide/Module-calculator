const { ask, r1 } = require("./input");

const operations = {
    1: require("./add"),
    2: require("./sub"),
    3: require("./multiply"),
    4: require("./divide"),
    5: require("./trignometric function"),
    6: require("./power"),
    7: require("./root"),
    8: require("./log"),
    9: require("./factorial")
};

async function main() {
    console.log("Calculator");
    console.log("1: Addition");
    console.log("2: Subtraction");
    console.log("3: Multiplication");
    console.log("4: Division");
    console.log("5: Trignometric functions");
    console.log("6: Power (x^y)");
    console.log("7: Nth root");
    console.log("8: log");
    console.log("9: Factorial");

    const choice = await ask("Choose an operation: ");
    if (operations[choice]) {
        await operations[choice]();
    }
    else {
        console.log("Invalid choice");
    }

    r1.close();
}

main();