let students = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 85 },
  { name: "David", score: 60 }
];


//Return an array of names for students with score > 80, Sort the names alphabetically ["Alice", "Charlie"]

let output = students.reduce((acc, curr) => {

    if(curr.score> 80)
    {
        acc.push(curr.name)
    }
    return acc
},[]).sort();

console.log(output)

//or using filter+map+sort
// let students = [
//   { name: "Alice", score: 90 },
//   { name: "Bob", score: 75 },
//   { name: "Charlie", score: 85 },
//   { name: "David", score: 60 }
// ];

// let output = students
//   .filter(student => student.score > 80)  // get only students with score > 80
//   .map(student => student.name)            // extract names
//   .sort();                                 // sort alphabetically

// console.log(output); // ["Alice", "Charlie"]
