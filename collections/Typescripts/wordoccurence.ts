

function countOccur(st: string)
{
    let ouput: Map<string,number> = new Map()
    
    for(let i of st)
    {
        if(ouput[i])
            ouput[i]++;
        else
            ouput[i] = 1;
    }
    console.log(ouput)

}


let st: string = "telescope"
countOccur(st)