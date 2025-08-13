// 1Merge and sort two arrays
// Function takes two number[] arrays.
//Returns one sorted array without modifying the originals.


function mergeArrays(number1: number[], number2: number[]): number[] {
    let output: number[] = [];

    number1.forEach(num => output.push(num));
    number2.forEach(num => output.push(num));

    return output.sort((a, b) => a - b);
}


let number1: number[] = [1, 2, 3]
let number2: number[] = [4, 5, 6]

console.log(mergeArrays(number1,number2))



