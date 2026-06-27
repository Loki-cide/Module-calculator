const {ask, r1} = require("./input");

const operations = {
    1: require("./add"),
    2: require("./sub"),
    3: require("./multiply"),
    4: require("./divide")
};

async function main() {
    console.log("Calculator");
    console.log("1: Addition");
    console.log("2: Subtraction");
    console.log("3: Multiplication");
    console.log("4: Division");

    const choice = await ask("Choose an operation: ");
    if (operations[choice]){
        await operations[choice]();
    }
    else{
        console.log("Invalid choice");
    }

    r1.close();
}

main();