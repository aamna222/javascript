let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "hello world";

let newBtn = document.createElement('button');

elem[0].appendChild(newBtn);

newBtn.innerHTML = "click here!"
newBtn.className = "btn btn-dark px-5 fw-bold";
newBtn.style.letterSpacing = "10px";

// events

newBtn.addEventListener('click' , hello);
function hello(){
    console.log("YOU CLICKED ON ME!");
    newBtn.innerHTML = "WOW☺"
}

let newInp = document.createElement('input');
elem[0].appendChild(newInp);
newInp.className = "form-control mt-5";

newInp.addEventListener('keyup' , wow);
function wow(){
    console.log("apple apple");
}