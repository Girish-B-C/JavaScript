let fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];


let output = fruits.reduce((acc, curr) => {

    acc[curr] = (acc[curr] || 0) + 1

    return acc

},{})

console.log(output)