// let grade = prompt("enter your value");

// let result = grade == "A" || grade == "B" || grade == "C" || grade == "D" ? "pass" : "fail";
// console.log(result);

let grade = prompt("enter your grade");
let per = prompt("enter your percentage");
// let user = prompt("enter your percentage and grade");
// console.log(user);

let number = grade == "A" && per == "90" || grade == "B"  && per == "80" || grade == "C"  && per == "70"|| grade == "D"  && per == "60" ? "pass" : "fail";

console.log(number);