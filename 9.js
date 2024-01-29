function hello(){
    console.log("hello world");
}
hello()
hello()

// function with parameteers

function person(name,age,grade){
    return name+""+age+""+grade;
}
let myvalues = person("ali","58","d");

// console.log(myvalues);

function sum(a,b){
    console.log(`the sum of a+b is ${a+b}`)
}
sum(50,25);
