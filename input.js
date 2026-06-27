const { resolve } = require("dns");
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question){
    return new Promise((resolve) =>{
        r1.question(question, resolve);
    });
}

module.exports = {ask, r1};