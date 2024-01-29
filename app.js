console.log("welcome to pjs");
console.log("hello world");

// data types
name = "mike";  //string
num = 50;  //number
x = undefined; //undefined
y = null; //null
Boolean = true; //true,false

console.table(name,num,x,y,Boolean);

// we have two types of data types

// primitive data types string num boolean int etc
//2) non primitive data types array,objects,functions etc


let obj ={
    name : "asad",
    age : 15,
    grade : "A",
    phone : 45678,
    city : "karachi"
}

//first method to getting values
console.log(obj["name"]);
console.log(obj["phone"]);

//second method to getting values of an object
console.log(obj.city);

//for in loop
for(let i in obj){
    console.log (i , obj[i])
}

