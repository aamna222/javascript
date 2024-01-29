let heroes = [ "superman" , "bat man" , "spider man" , "hulk" , "iron man" , "falcon" ];
console.log(heroes);

// arrays are mutable
heroes[5] = "aqua man";
console.log(heroes);

// splice method
console.log(heroes.splice(2,0,"why man"));
console.log(heroes); 

let bbq = [ "tikka" , "seekh kbab" , "malai boti" , "chapli kbab" , "chargah" ];
let seafood = [ "fish" , "prwans" , "lobster" ];
let sweetdish = [ "custard" , "jelly" , "ice cream" , "gulab jamun" ];

let menu = bbq.concat(seafood , sweetdish);
console.log(menu); 