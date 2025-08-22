function findMissingNumber(arr, n) {
    // Sum of first n numbers
    let total = (n * (n + 1)) / 2;  //standard formula - sum of array

    // Sum of elements in the array
    let sumArr = arr.reduce((acc, num) => acc + num, 0); // key code to get sum of array numbers

    // Missing number
    return total - sumArr;
}

// Example
let arr = [1, 2, 3, 4, 5, 6, 8]; 
let n = 8;

console.log(findMissingNumber(arr, n)); // Output: 3
