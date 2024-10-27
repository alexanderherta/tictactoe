const grid = document.querySelector(".grid");
let gridArray = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];
const squares = document.querySelectorAll(".squares");
const square1 = document.querySelector("#square1");
const square2 = document.querySelector("#square2");
const square3 = document.querySelector("#square3");
const square4 = document.querySelector("#square4");
const square5 = document.querySelector("#square5");
const square6 = document.querySelector("#square6");
const square7 = document.querySelector("#square7");
const square8 = document.querySelector("#square8");
const square9 = document.querySelector("#square9");
const xImg = `<img class="x-o-img" src="./x.png" alt="X image">`;
const oImg = `<img class="x-o-img" src="./o.png" alt="O image">`;
let isPlayerX = true;

function startGame() {
  for(i = 0; i < 9; i++) {
    squares[i].innerHTML = "";
  }

  grid.addEventListener("click", (e) => {
    switch(e.target.id) {
      case "square1":
        square1.innerHTML = switchPlayers();
        break;
      case "square2":
        square2.innerHTML = switchPlayers();
        break;
      case "square3":
        square3.innerHTML = switchPlayers();
        break;
      case "square4":
        square4.innerHTML = switchPlayers();
        break;
      case "square5": 
        square5.innerHTML = switchPlayers();
        break;
      case "square6":
        square6.innerHTML = switchPlayers();
        break;
      case "square7":
        square7.innerHTML = switchPlayers();
        break;
      case "square8":
        square8.innerHTML = switchPlayers();
        break;
      case "square9":
        square9.innerHTML = switchPlayers();
        break;
      default:
        break;
      }
  });
}

function switchPlayers() {
  if(isPlayerX) {
    isPlayerX = !isPlayerX;
    return xImg;
  }
  if(!isPlayerX) {
    isPlayerX = !isPlayerX;
    return oImg;
  }
}