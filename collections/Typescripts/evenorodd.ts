// 1. Even or Odd
// Write a function that takes a number and returns "Even" if it’s even or "Odd" if it’s odd.

// Example:

// ts
// Copy
// Edit
// evenOrOdd(4) // "Even"
// evenOrOdd(7) // "Odd"
function evenorodd(input: number)
{
    if(input%2 == 0)
    {
        console.log("its even number")

    }
    else
    {
        console.log("its odd number");
    }
}

let input = 6

evenorodd(input)