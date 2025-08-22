let Input = 5;

function fact(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * fact(num - 1);
}

console.log(fact(Input)); // Output: 120


//using diffrent approach 

// let Input = 5;

// // Create an array [1, 2, 3, 4, 5]
// let output = [];
// for (let i = 1; i <= Input; i++) {
//     output.push(i);
// }
// console.log(output); // [1, 2, 3, 4, 5]

// // Multiply all numbers in the array using reduce
// let fact = output.reduce((acc, curr) => acc * curr, 1);
// console.log(fact); // 120
