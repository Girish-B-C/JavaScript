function countVowels(st: string)
{
    let count = 0;
    
   for(let i=0;i<st.length;i++){
        if(st.charAt(i) == 'a' || st.charAt(i) == 'e' || st.charAt(i) =='i' || st.charAt(i) =='o' || st.charAt(i) =='u')
        {
            count++;
        }
    
   }
    console.log("The count is ", count);
}

let st = "typescripta";

countVowels(st);


//or

function countVowels1(st: string) {
    let count = 0;
    for (let i = 0; i < st.length; i++) {
        if ('aeiou'.includes(st.charAt(i))) {
            count++;
        }
    }
    console.log("The count is", count);
}

countVowels1("dramatic")


//removeduplicate removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// function removeDup(ar: number[])
// {
//    let output: number[] = [];

//     ar.forEach((value, index, array) => {
//         // Only add the value if its first occurrence is at the current index
//         if (array.indexOf(value) === index) {
//             output.push(value);
//         }

//     })
//     console.log(output)
// }

// let input = [1, 2, 2, 3, 4, 4, 5]
// removeDup(input)