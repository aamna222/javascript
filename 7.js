let username = prompt("enter your name");
console.log(username);
let math = parseInt(prompt("enter your math number"));
let eng = parseInt(prompt("enter your eng number"));
let isl = parseInt(prompt("enter your isl number"));
let urdu = parseInt(prompt("enter your urdu number"));
let pst = parseInt(prompt("enter your pst number"));

let obtainedmarks = math + eng + isl + urdu + pst;
console.log(obtainedmarks)

// per formula
let per = obtainedmarks/500*100;
console.log(per);

if(per >=90 && per <=100){
    console.log("your grade is A+1");
}

else if(per >=80 && per <=90){
    console.log("your grade is A+");
}
else if(per >=70 && per <=80){
    console.log("your grade is A");
}

else if(per >=60 && per <=70){
    console.log("your grade is B");
}

else if(per >=50 && per <=40){
    console.log("your grade is c");
}
else if(per >=33 && per <=40){
    console.log("your grade is D");
}
else if(per <=40){
    console.log("failed");
}




// let subject1 = prompt("enter your english marks");
// let subject2 = prompt("enter your urdu marks");
// let subject3 = prompt("enter your physics marks");
// let subject4 = prompt("enter your maths marks");
// let subject5 = prompt("enter your chemistry marks");
// let total = subject1+subject2+subject3+subject4+subject5;
// console.log(total);

// let percentage = total/500*100;
// console.log(percentage);
