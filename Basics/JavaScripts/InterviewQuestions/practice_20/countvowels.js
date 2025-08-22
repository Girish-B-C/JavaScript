let Input= "javascriptA"
//Output: 3   // (a, a, i)

let count = 0

for (let ch of Input) {
    if ("aeiou".includes(ch.toLowerCase())) {
        count++
    }
}
console.log(count)  // 3
