// Input: "hello"

let input = "racecar";

let reversed = input.split("").reverse().join("");

if (input === reversed) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
