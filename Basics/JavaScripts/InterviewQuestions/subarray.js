let input = [2, 6, 3, 6, 5, 5, 9, 6, 1];
let target = 10;

let seen = {};
let output = [];

for (let num of input) {
    let complement = target - num;

    if (seen[complement] && seen[complement] > 0) {
        output.push([num, complement]);
        seen[complement]--;
    } else {
        seen[num] = (seen[num] || 0) + 1;
    }
}

console.log(output);
