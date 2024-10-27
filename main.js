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
let switchImg = true;
let switchPlayer = true;

function startGame() {
  for(i = 0; i < 9; i++) {
    squares[i].innerHTML = "";
  }

  grid.addEventListener("click", (e) => {
    switch(e.target.id) {
      case "square1":
        square1.innerHTML = switchPlayersImg();
        gridArray[0][0] = switchPlayers();
        break;
      case "square2":
        square2.innerHTML = switchPlayersImg();
        gridArray[0][1] = switchPlayers();
        break;
      case "square3":
        square3.innerHTML = switchPlayersImg();
        gridArray[0][2] = switchPlayers();
        break;
      case "square4":
        square4.innerHTML = switchPlayersImg();
        gridArray[1][0] = switchPlayers();
        break;
      case "square5": 
        square5.innerHTML = switchPlayersImg();
        gridArray[1][1] = switchPlayers();
        break;
      case "square6":
        square6.innerHTML = switchPlayersImg();
        gridArray[1][2] = switchPlayers();
        break;
      case "square7":
        square7.innerHTML = switchPlayersImg();
        gridArray[2][0] = switchPlayers();
        break;
      case "square8":
        square8.innerHTML = switchPlayersImg();
        gridArray[2][1] = switchPlayers();
        break;
      case "square9":
        square9.innerHTML = switchPlayersImg();
        gridArray[2][2] = switchPlayers();
        break;
      default:
        break;
      }
  });
}

function switchPlayersImg() {
  if(switchImg) {
    switchImg = !switchImg;
    return xImg;
  }
  if(!switchImg) {
    switchImg = !switchImg;
    return oImg;
  }
}

function switchPlayers() {
  if(switchPlayer) {
    switchPlayer = !switchPlayer;
    return "X";
  }
  if(!switchPlayer) {
    switchPlayer = !switchPlayer;
    return "O";
  }
}