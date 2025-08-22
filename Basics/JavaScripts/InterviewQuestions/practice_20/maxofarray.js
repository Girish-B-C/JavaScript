let Input = [3, 7, 2, 9, 5]
//Output: 9

let max = Input[0]
for(let i=0;i<Input.length;i++)
{
    if(Input[i] > max)
    {
        max = Input[i]
    }
}
console.log(max)
//direct approach
console.log(Math.max(...Input))