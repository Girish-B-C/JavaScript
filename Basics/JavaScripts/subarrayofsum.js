let input = [2, 6, 3, 6, 5, 5, 9, 6, 1, 4];
let target = 10;

let seen = {};
let output = [];

for (let num of input) {
    let complement = target - num;

    if (seen[complement] > 0) {
        output.push([num, complement]);
        seen[complement]--;
    } else {
        seen[num] = (seen[num] || 0) + 1;
    }
}

console.log(output);


//or old strategy

let input1 = [2, 6, 3, 6, 5, 5, 9, 6, 1, 4];
let target1 = 10;

let output1 = [];

for (let i = 0; i < input1.length; i++) {
    for (let j = i + 1; j < input1.length; j++) {
        if (input1[i] + input1[j] === target1) {
            output1.push([input1[i], input1[j]]);
            // Optionally mark used numbers if you want each only once
            input1[j] = null;  
            break;
        }
    }
}

console.log(output1);

//or set is easy

let numbers = [2, 6, 3, 6, 5, 5, 9, 6, 1, 4];
let targetSum = 10;

let memory = new Set();   // keeps track of numbers we’ve seen
let pairs = [];           // stores valid pairs

for (let value of numbers) {
    let needed = targetSum - value;

    if (memory.has(needed)) {
        pairs.push([value, needed]);
        memory.delete(needed); // remove so it isn’t reused
    } else {
        memory.add(value);
    }
}

console.log(pairs);
