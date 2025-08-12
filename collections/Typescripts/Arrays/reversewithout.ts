// 1. Reverse an array without using .reverse()
// Example:
// Input: ["a", "b", "c", "d"]
// Output: ["d", "c", "b", "a"]


let charArray: string[] = ["a", "b", "c", "d"];

let reversedArray: string[] = [];
for(let i = charArray.length - 1; i >= 0; i--) {
    reversedArray.push(charArray[i] as string);
}

console.log(reversedArray); // Output: ["d", "c", "b", "a"]