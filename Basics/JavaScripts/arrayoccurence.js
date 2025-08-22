let str = "aaabbcd";

let result = "";
let count = 1;


for(let ch in str){
    if(str[ch] === str[Number(ch)+1])
    {
        count++
    }
    else
    {
        result += str[ch] + count
        count = 1
    }

    }

console.log(result); // a3b2c1
