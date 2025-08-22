let products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Phone", category: "Electronics", price: 600 },
  { name: "Pants", category: "Clothing", price: 50 },
  { name: "Headphones", category: "Electronics", price: 100 }
];


//Task: Return the total price of products in "Electronics" category 1700

let output = products.filter((item) => item.category === "Electronics").reduce((acc, curr) => { return acc + curr.price}, 0)

console.log(output)

let output1 = products.reduce((acc, curr) => { 
    
    if(curr.category==="Electronics")
    {
    acc = acc + curr.price
    }
    return acc

}, 0)

console.log(output1)