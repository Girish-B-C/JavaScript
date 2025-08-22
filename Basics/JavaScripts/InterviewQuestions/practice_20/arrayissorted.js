let input = [2, 3, 4, 4, 6, 7, 8, 9, 10];

let isSorted = input.every((val, i, arr) => i === 0 || arr[i - 1] <= val);

console.log(isSorted); // true
