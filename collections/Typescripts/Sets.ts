//set

let newset : Set<number> = new  Set([1,2,3,4,5,6]);

newset.add(7);
newset.add(8);
newset.add(2); //wont add duplicates

console.log("has number 3?",newset.has(3));

newset.forEach(numb => {
    console.log(numb);
})
