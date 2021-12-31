let holdx = document.getElementById("1");
let holdo = document.getElementById("0");
let main = document.getElementById("main");
let userChoice = document.querySelectorAll(".choice");
console.log("hiiii", button);
var X =
  "http://images.clipartpanda.com/vandalism-clipart-Cyrillic_O_Vector_Clipart.png";
var O =
  "https://image.shutterstock.com/z/stock-vector-x-red-letter-x-made-with-ink-mark-grunge-style-vector-416997832.jpg";

  

    let gameState = [];


// let varSelector = {
//   1: "",
//   0: "",
// };
let id; 
let counted = 1;

button.addEventListener("click", selection);
function selection(e) {
  id = e.target.id;
  console.log(':::id', id)

  if ( counted % 2 === 0 && counted < 3) {


       
  } else {
    
    console.log("hiii", counted);

  }
  counted = counted + 1;

  
}

//********************************** */
// function selection() {

//   if (varSelector[1] == " ") {
//     varSelector[1] = X;
//     varSelector[0] = O;
//     const userOne = varSelector[1];
//     const userTwo = varSelector[0];
//   } else {
//     varSelector[1] = O;
//     varSelector[0] = X;
//     const userOne = varSelector[1];
//     const userTwo = varSelector[0];
//   }
// }

// selection();
//******************************************************************************* */

let count = 0;


(() => {
  for (let i = 0; i < 9; i++) gameState.push("");
})();

main.addEventListener("click", clickHandler);

function clickHandler(e) {
  // selection();
  console.log("hello everyone");
   id = e.target.id;
  if (count % 2 == 0 && count < 9) {

    gameState[id]=O;
    gameState[id]=X;

    document.getElementById(id).src = gameState[id];
  } else {
    gameState[id]= O;


    document.getElementById(id).src = gameState[id];
  }

  checkWinCondition();
  count = count + 1;
  if (count > 8) {
    alert("draw");
  }
}

function isWinningFunc(a, b, c) {
  console.log(gameState[a], gameState[b], gameState[c]);
  if (!gameState[a] || !gameState[b] || !gameState[c]) return false;

  return gameState[a] === gameState[b] && gameState[b] === gameState[c];
}
function checkWinCondition() {
  let check_code = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [0, 4, 8],
  ];
  console.log(gameState);
  for (let item of check_code) {
    const a = item[0];
    const b = item[1];
    const c = item[2];

    console.log(":::userInput", item);
    const isWinning = isWinningFunc(a, b, c);
    if (isWinning) alert("won");
  }
}
// //   if()
// // }

// const userOne = holdx;
// const usertwo = holdo;
// userOne.addEventListener( "click", onCheckUser)

// function onCheckUser(e){
//   console.log("hi everyone");

//   for(i=1; i < 9; i++){
//     var id = i;
//     if(id % 2 == 0){
//       let x = document.getElementById(id).innerText = userOne;
//     }else{
//       document.getElementById(id).innerText = usertwo;
//     }
//   }

// }

// function userClick(e){
// var userClick = e.target.id;
// document.getElementById(id).innerText =  userOne

// }
// if(gameState[id] =! "" && gameState[1] == gameState[2] && gameState[2] == gameState[3]){
//   alert("won");
// }
