//map

let newmap : Map<string,number> = new Map();

newmap.set("alice",20);
newmap.set("john",10);

console.log("John age is: ", newmap.get("john"));

newmap.forEach((age,name) => {
    console.log(`${age}: ${name}`)
})