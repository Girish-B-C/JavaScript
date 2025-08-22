let str ="This is not serious situation be calm"

let output = str.split(" ").reverse().join(" ")

console.log(output)

let name1 = "Javascripttt"
let obj = {}
let maxChar;
let maxCount =0;

for(let ch of name1)
{
    obj[ch] = (obj[ch] || 0) + 1
    if(obj[ch] > maxCount)
    {
        maxChar = ch
        maxCount = obj[ch]
    }

}


console.log(maxChar)


let str1 = "javascript";
let freq1 = {};
let maxChar1 = "";
let maxCount1 = 0;

for(let ch of str1){
    freq1[ch] = (freq1[ch] || 0) + 1;
    if(freq1[ch] > maxCount1){
        maxCount1 = freq1[ch];
        maxChar1 = ch;
    }
}

console.log(maxChar1); // "a"


let arr = [2, 5, 6, 9, 8]

let max = arr[0]

for(let no of arr)
{
    if(no > max)
    {
        max= no
    }
}

console.log(max)

let str2 = "mymer"

let ot = str2.split("").reverse().join("")

console.log(ot)
