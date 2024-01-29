// dom
let elem = document.getElementById('second');
console.log(elem);
// elem.innerHTML = "an apple a day!";
elem.textContent = "AN APPLE A DAY!";
elem.style.backgroundColor = "grey";
elem.style.textAlign = "center";
elem.style.padding = "20px";
elem.classList.add('two');
elem.classList.add('three');
elem.id = "hello";
elem.classList.remove('two');

let myDiv = document.getElementsByClassName('container');
console.log(myDiv);

myDiv[0].innerHTML = "BATCH CODE";
myDiv[0].style.backgroundColor = "purple";
myDiv[0].style.textAlign = "center";
myDiv[0].style.fontSize = "40px";
myDiv[0].style.Color = "white";
myDiv[0].classList.add("world");
myDiv[0].id = "pencil";


let newElem = document.createElement('p');
newElem.innerHTML = "AAMNA";

myDiv[0].appendChild(newElem);

let pencil = document.createElement('img');
newElem.appendChild(pencil);

pencil.src = "img.Webp";

// tag name
let newTag = document.getElementsByTagName('p');
newTag[1]