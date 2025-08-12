const cararray1: string[] = ['benz','goldi','maruthi']

cararray1.push("hyundai");
cararray1.push("audi");

cararray1.forEach(car => {
    console.log(car);
})

let lencararray1 = cararray1.filter(car => car.length>5)
console.log(lencararray1);

//print all car starting with a
let acar1 = cararray1.filter(car => car.split('')[0] == 'a')

console.log(acar1);

let firstcar: string | undefined = acar1[0];
if (firstcar !== undefined) {
    console.log(cararray1.indexOf(firstcar));
} else {
    console.log("No car starting with 'a' found.");
}