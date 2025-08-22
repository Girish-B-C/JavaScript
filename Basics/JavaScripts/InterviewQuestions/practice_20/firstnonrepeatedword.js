let input = "swiss";

let freq = {};

// 1st pass: count frequency
for (let ch of input) {
  freq[ch] = (freq[ch] || 0) + 1;
}

// 2nd pass: find first non-repeated in original order
let result = null;
for (let ch of input) {
  if (freq[ch] === 1) {
    result = ch;
    break;
  }
}

console.log(result); // "w"
