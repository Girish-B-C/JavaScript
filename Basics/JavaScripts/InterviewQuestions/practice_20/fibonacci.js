let input = 5;
let output = [0, 1];

for (let i = 2; i < input; i++) {
    output.push(output[i - 1] + output[i - 2]);
}

console.log(output); // [0, 1, 1, 2, 3]
