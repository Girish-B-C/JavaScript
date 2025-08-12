// 2. Find all elements greater than a given number
// Example:
// Array: [4, 8, 2, 9, 1, 5]
// Number: 4
// Output: [8, 9, 5]

let ne: number[] = [4, 8, 2, 9, 1, 5]

let key: number = 4;
let output: number[] = [];

ne.forEach(num =>
{
    if(num > key)
    {
        output.push(num);
    }
})

console.log(output)

//using filter let let output = ne.filter(num => num > key);