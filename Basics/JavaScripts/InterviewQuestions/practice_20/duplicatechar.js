let text ="testingg"

let st = {}
let count = 0
for(let ch of text)
{
        if(st[ch])
        { 
            count++
        }
        else{
        st[ch] = (st[ch] || 0) + 1
        }
}

console.log(count)