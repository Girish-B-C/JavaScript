let nested = [[1, 2], [3, 4], [5]];

let output = nested.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(output); // [1, 2, 3, 4, 5]
