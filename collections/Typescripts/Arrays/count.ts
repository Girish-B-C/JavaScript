

// 3. Count how many times each element appears in the array
// Example:
// Input: ["apple", "banana", "apple", "orange", "banana", "apple"]
// Output:
// apple: 3
// banana: 2
// orange: 1

// Declare an array of fruits
let fruits: string[] = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Create an empty object to store the count of each fruit
let countMap: { [key: string]: number } = {};

// Loop through each fruit in the array
for (let fruit of fruits) {
    // If the fruit is already in countMap, increment its count
    if (countMap[fruit]) {
        countMap[fruit]++;
    } else {
        // If the fruit is not in countMap, set its count to 1
        countMap[fruit] = 1;
    }
}

