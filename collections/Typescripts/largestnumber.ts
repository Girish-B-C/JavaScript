// 3. Find the Largest Number
// Given an array of numbers, return the largest one.

// Example:

// ts
// Copy
// Edit
// largestNumber([1, 11, 2, 9, 3]) // 9

function largestNumber(input: number[])
{
    let largest = input[0]
    input.forEach(num => {
        
      if(num > largest)
      {
        largest = num
      }
    })
    console.log("The largest no is : ", largest);
}


let input = [1, 11, 2, 9, 23]
largestNumber(input)

