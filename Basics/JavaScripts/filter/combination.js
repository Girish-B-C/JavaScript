let students = [
  { name: "Ravi", score: 85 },
  { name: "Anita", score: 72 },
  { name: "Girish", score: 90 },
  { name: "Meena", score: 80 },
  { name: "Kiran", score: 95 }
];

let output = students
  .filter(student => student.score > 80)   // keep only score > 80
  .map(student => student.name)            // take only names
  .sort();                                 // sort alphabetically

console.log(output);
// ["Girish", "Kiran", "Ravi"]
