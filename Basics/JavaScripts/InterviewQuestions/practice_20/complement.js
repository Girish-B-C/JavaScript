let input = [2,6,5,4,3,1,8,7,3,2]
let target = 10

let st = {}
let output = []

input.forEach(num => {
    
    let complement = target - num
    
    if(st[complement]>0)
    {
        output.push([complement, num])
        st[complement]--;
    }
    else
    {
        st[num] = (st[num] || 0) + 1
    }
    
})

console.log(output)