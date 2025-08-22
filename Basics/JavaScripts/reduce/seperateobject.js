let data = [1, "apple", 2, "banana", 3, "mango"];

// {
//   numbers: [1, 2, 3],
//   strings: ["apple", "banana", "mango"]
// }


let output = data.reduce((acc, curr) => {

    if(typeof curr === "number")
    {
        acc.numbers.push(curr)
    }
    else if(typeof curr === "string")
    {
        acc.strings.push(curr)
    }

    return acc


}, { numbers: [], strings: [] })

console.log(output)