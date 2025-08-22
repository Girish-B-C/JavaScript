let products = [
  { name: "apple", price: 100 },
  { name: "banana", price: 60 },
  { name: "mango", price: 150 }
];

//310
let sum =0
let output = products.reduce((acc, curr) => { 

    sum = sum + curr.price
    return sum

 }, 0)

 console.log(output)


 //or cleaner Code
//  let output = products.reduce((acc, curr) => {
//   return acc + curr.price;
// }, 0);

// console.log(output); // 310
