let Input = [0, 2, 5, 0, 0, 9, 6, 1, 0, 9];

let output = Input.filter(n => n !== 0);
let zeros = Input.filter(n => n === 0);

console.log(output.concat(zeros)); // [2, 5, 9, 6, 1, 9, 0, 0, 0, 0]


//let output = arr.filter(n => n !== 0).concat(arr.filter(n => n === 0));
