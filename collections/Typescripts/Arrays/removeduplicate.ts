// 4. Remove duplicate values from the array
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// Using Set to remove duplicates (Set only stores unique values)
let input: number[] = [1, 2, 2, 3, 4, 4, 5];

let myset = new Set(input); // Creates a Set from the array (removes duplicates)
console.log(myset); // Logs the Set object, not an array

// Correct way: Convert Set back to array using spread operator
let input1: number[] = [1, 2, 2, 3, 4, 4, 5];
let output1 = [...new Set(input1)]; // Spread Set into a new array
console.log(output1); // [1, 2, 3, 4, 5]

// Alternative: Using filter and indexOf to remove duplicates
let input2: number[] = [1, 2, 2, 3, 4, 4, 5];

let output2 = input2.filter((value, index, array) => {
  // Keep only the first occurrence of each value
  return array.indexOf(value) === index;
});

console.log(output2); // [1, 2, 3, 4, 5]