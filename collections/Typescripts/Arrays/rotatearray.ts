// 5. Rotate the array by k positions to the right
// Example:
// Array: [1, 2, 3, 4, 5]
// k = 2
// Output: [4, 5, 1, 2, 3]


let ex = [1, 2, 3, 4, 5, 6, 7];
let rotate = 3;

// Calculate the effective rotation in case rotate > array length
let k = rotate % ex.length;

// Use slice and concat to rotate
let output = ex.slice(-k).concat(ex.slice(0, -k));

console.log(output); // [4, 5, 1, 2, 3]