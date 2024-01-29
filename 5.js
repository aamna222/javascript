// array

let fruits =["apple" , "mango" , "orange" , "pineapple"];
console.log(fruits);
console.log(fruits.length);

// method of an array
// push last index mai add krta hai

console.log(fruits.push("banana"));
console.log(fruits);

// pop last index ko remove krta hai
console.log(fruits.pop());
console.log(fruits);

// shift first index k elememt ko remove krta hai

console.log(fruits.shift());
console.log(fruits);

// unshift first index mai element ko add krta hai 

console.log(fruits.unshift("kiwi"));
console.log(fruits);

// ['kiwi' , 'mango' , 'orange' , 'pine apple']

console.log(fruits.slice(1,4));