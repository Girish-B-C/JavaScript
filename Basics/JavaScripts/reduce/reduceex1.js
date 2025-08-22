let words = ["apple", "banananananana", "kiwi", "strawberry"];

let output = words.reduce((acc, curr) => 
  acc.length > curr.length ? acc : curr
, "");

console.log(output); // "strawberry"
