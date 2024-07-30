const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', function (line) {
    inputLines.push(line);
    if (inputLines.length === 2) {
        rl.close();
    }
});

rl.on('close', function () {
    const N = parseInt(inputLines[0].trim());
    const S = inputLines[1].trim();

    let toggledString = '';

    for (let i = 0; i < N; i++) {
        const char = S[i];
        if (char >= 'a' && char <= 'z') {
            toggledString += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            toggledString += char.toLowerCase();
        } else {
            toggledString += char;
        }
    }

    console.log(toggledString);
});