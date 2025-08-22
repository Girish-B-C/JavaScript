let orders = [
  { customer: "Alice", amount: 250 },
  { customer: "Bob", amount: 150 },
  { customer: "Alex", amount: 300 },
  { customer: "Charlie", amount: 100 }
];


//ouput = Return the total amount spent by customers whose name starts with "A". 550  // Alice (250) + Alex (300)

let output = orders.filter(name => name.customer[0] === "A").reduce((acc, curr) => { 
    
    acc = acc + curr.amount
    return acc

},0)

console.log(output)