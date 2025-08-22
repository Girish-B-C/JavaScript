let products = [
  { name: "Pen", price: 10 },
  { name: "Shirt", price: 40 },
  { name: "Headphones", price: 100 },
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 60 }
];


//output = {
//   cheap: ["Pen", "Shirt"],
//   medium: ["Headphones", "Mouse"],
//   expensive: ["Laptop"]
// }

//"cheap" → price < 50

// "medium" → price 50–100

// "expensive" → price > 100

let output = products.reduce((acc, curr) => { 

    if(curr.price >= 50 && curr.price <= 100)
    {
        acc.medium.push(curr.name)
    }
    else if(curr.price > 100)
    {
        acc.expensive.push(curr.name)
        
    }
    else if(curr.price < 50)
    {
        acc.cheap.push(curr.name)
    }

    return acc

},{ cheap: [], medium: [], expensive: []})

console.log(output)