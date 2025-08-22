let str = "hello world";
// let capitalized = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
// console.log(capitalized); // "Hello World"

let string1 = str.split(" ")[0].charAt(0).toUpperCase() + str.split(" ")[0].slice(1);
let string2 = str.split(" ")[1].charAt(0).toUpperCase() + str.split(" ")[1].slice(1);

console.log(string1+string2)

