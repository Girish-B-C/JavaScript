let arr = ["cat", "dog", "cat", "bird", "dog", "dog", "bird"];

//{ cat: 2, dog: 3, bird: 1 }

let output = arr.reduce((acc, curr) => {

    acc[curr] = (acc[curr] || 0) + 1 //here acc represents the object ex acc["cat"] =2; acc is new object cat is key 2 is value
    return acc

},{})

console.log(output)