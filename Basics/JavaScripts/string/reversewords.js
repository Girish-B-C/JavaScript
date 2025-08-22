function reverseWords(str) {
    // Split by spaces, reverse array, join back
    let output = str.split(" ").reverse().join(" ");
    console.log(output);
}

let str = "I love JavaScript";
reverseWords(str); // JavaScript love I
