// game
let gameNum = 85;
let userNum = prompt("enter your number");
while(userNum != gameNum){
    userNum = prompt("you guess the wrong number : guess again")
}

swal({
    title: "game alert!",
    text: "you win the game😍.",
    timer: 2000
  });