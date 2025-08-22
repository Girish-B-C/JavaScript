let input = [1, [2, [3, 4], 5]];

function flatten(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}

console.log(flatten(input)); // [1, 2, 3, 4, 5]
