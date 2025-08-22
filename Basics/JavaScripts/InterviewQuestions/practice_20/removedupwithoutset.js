// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

let Input = [1, 2, 2, 3, 4, 4, 5]

let st ={}
let ouput = []

Input.forEach(no => {
    
        st[no] = (st[no] || 0) + 1
})

for(let key in st)
{
    ouput.push(Number(key))
}

console.log(ouput)

//with set
// Input: [1, 2, 2, 3, 4, 4, 5] 
// // Output: [1, 2, 3, 4, 5] 
let Input1 = [1, 2, 2, 3, 4, 4, 5] 
let st1 = new Set(Input) 
console.log([...st1])