const heading = document.querySelector("#heading");
const grid = document.querySelector(".grid");
let positions = [
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
const startButton = document.querySelector("#start-button");
const xImg = `<img class="x-o-img" src="./x.png" alt="X image">`;
const oImg = `<img class="x-o-img" src="./o.png" alt="O image">`;
const playAgainButton = `<button onclick="location.reload()">Play Again?</button>`;
let isXTurn = false;
let switchImg = true;
let switchPlayer = true;
let hasSomeoneWon = false;

for(i = 0; i < 9; i++) {
  let chars = "0123456789ABCDEF";
  let randomColor = "#";
  for (j = 0; j < 6; j++) {
    randomColor += chars[Math.floor(Math.random() * 16)];
  }
  squares[i].style.backgroundColor = randomColor;
}

function resetGame() {
  for(i = 0; i < 9; i++) {
    squares[i].innerHTML = "";
    squares[i].style.backgroundColor = "lightgray";
    console.log(squares[i]);
  }
  startButton.remove();
  switchImg = true;
  switchPlayer = true;
  hasSomeoneWon = false;
}

function startGame() {
  resetGame();

  heading.innerText = `X's turn...`;

  grid.addEventListener("click", (e) => {
    if(!hasSomeoneWon) {
      switch(e.target.id) {
        case "square1":
          square1.innerHTML = switchPlayersImg();
          positions[0][0] = switchPlayers();
          heading.innerText = `${whosTurn()}'s turn...`;
          checkIfWinner();
          break;
        case "square2":
          square2.innerHTML = switchPlayersImg();
          positions[0][1] = switchPlayers();
          heading.innerText = `${whosTurn()}'s turn...`;
          checkIfWinner();
          break;
        case "square3":
          square3.innerHTML = switchPlayersImg();
          positions[0][2] = switchPlayers();
          heading.innerText = `${whosTurn()}'s turn...`;
          checkIfWinner();
          break;
        case "square4":
          square4.innerHTML = switchPlayersImg();
          positions[1][0] = switchPlayers();
          heading.innerText = `${whosTurn()}'s turn...`;
          checkIfWinner();
          break;
        case "square5": 
          square5.innerHTML = switchPlayersImg();
          positions[1][1] = switchPlayers();
          heading.innerText = `${whosTurn()}'s turn...`;
          checkIfWinner();
          break;
        case "square6":
          square6.innerHTML = switchPlayersImg();
          positions[1][2] = switchPlayers();
          heading.innerText = `${whosTurn()}'s turn...`;
          checkIfWinner();
          break;
        case "square7":
          square7.innerHTML = switchPlayersImg();
          positions[2][0] = switchPlayers();
          heading.innerText = `${whosTurn()}'s turn...`;
          checkIfWinner();
          break;
        case "square8":
          square8.innerHTML = switchPlayersImg();
          positions[2][1] = switchPlayers();
          heading.innerText = `${whosTurn()}'s turn...`;
          checkIfWinner();
          break;
        case "square9":
          square9.innerHTML = switchPlayersImg();
          positions[2][2] = switchPlayers();
          heading.innerText = `${whosTurn()}'s turn...`;
          checkIfWinner();
          break;
        default:
          break;
      }
    }
  });
}

function whosTurn() {
  if(isXTurn) {
    isXTurn = !isXTurn;
    return "X";
  }
  if(!isXTurn) {
    isXTurn = !isXTurn;
    return "O";
  }
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

function checkIfWinner() {
  if(positions[0][0] === "X" && positions[0][1] === "X" && positions[0][2] === "X") {
    square1.style.backgroundColor = "green";
    square2.style.backgroundColor = "green";
    square3.style.backgroundColor = "green";
    displayWinnerX();
  }
  if(positions[1][0] === "X" && positions[1][1] === "X" && positions[1][2] === "X") {
    square4.style.backgroundColor = "green";
    square5.style.backgroundColor = "green";
    square6.style.backgroundColor = "green";
    displayWinnerX();
  }
  if(positions[2][0] === "X" && positions[2][1] === "X" && positions[2][2] === "X") {
    square7.style.backgroundColor = "green";
    square8.style.backgroundColor = "green";
    square9.style.backgroundColor = "green";
    displayWinnerX();
  }
  if(positions[0][0] === "X" && positions[1][0] === "X" && positions[2][0] === "X") {
    square1.style.backgroundColor = "green";
    square4.style.backgroundColor = "green";
    square7.style.backgroundColor = "green";
    displayWinnerX();
  }
  if(positions[0][1] === "X" && positions[1][1] === "X" && positions[2][1] === "X") {
    square2.style.backgroundColor = "green";
    square5.style.backgroundColor = "green";
    square8.style.backgroundColor = "green";
    displayWinnerX();
  }
  if(positions[0][2] === "X" && positions[1][2] === "X" && positions[2][2] === "X") {
    square3.style.backgroundColor = "green";
    square6.style.backgroundColor = "green";
    square9.style.backgroundColor = "green";
    displayWinnerX();
  }
  if(positions[0][0] === "X" && positions[1][1] === "X" && positions[2][2] === "X") {
    square1.style.backgroundColor = "green";
    square5.style.backgroundColor = "green";
    square9.style.backgroundColor = "green";
    displayWinnerX();
  }
  if(positions[0][2] === "X" && positions[1][1] === "X" && positions[2][0] === "X") {
    square3.style.backgroundColor = "green";
    square5.style.backgroundColor = "green";
    square7.style.backgroundColor = "green";
    displayWinnerX();
  }

  if(positions[0][0] === "O" && positions[0][1] === "O" && positions[0][2] === "O") {
    square1.style.backgroundColor = "green";
    square2.style.backgroundColor = "green";
    square3.style.backgroundColor = "green";
    displayWinnerO();
  }
  if(positions[1][0] === "O" && positions[1][1] === "O" && positions[1][2] === "O") {
    square4.style.backgroundColor = "green";
    square5.style.backgroundColor = "green";
    square6.style.backgroundColor = "green";
    displayWinnerO();
  }
  if(positions[2][0] === "O" && positions[2][1] === "O" && positions[2][2] === "O") {
    square7.style.backgroundColor = "green";
    square8.style.backgroundColor = "green";
    square9.style.backgroundColor = "green";
    displayWinnerO();
  }
  if(positions[0][0] === "O" && positions[1][0] === "O" && positions[2][0] === "O") {
    square1.style.backgroundColor = "green";
    square4.style.backgroundColor = "green";
    square7.style.backgroundColor = "green";
    displayWinnerO();
  }
  if(positions[0][1] === "O" && positions[1][1] === "O" && positions[2][1] === "O") {
    square2.style.backgroundColor = "green";
    square5.style.backgroundColor = "green";
    square8.style.backgroundColor = "green";
    displayWinnerO();
  }
  if(positions[0][2] === "O" && positions[1][2] === "O" && positions[2][2] === "O") {
    square3.style.backgroundColor = "green";
    square6.style.backgroundColor = "green";
    square9.style.backgroundColor = "green";
    displayWinnerO();
  }
  if(positions[0][0] === "O" && positions[1][1] === "O" && positions[2][2] === "O") {
    square1.style.backgroundColor = "green";
    square5.style.backgroundColor = "green";
    square9.style.backgroundColor = "green";
    displayWinnerO();
  }
  if(positions[0][2] === "O" && positions[1][1] === "O" && positions[2][0] === "O") {
    square3.style.backgroundColor = "green";
    square5.style.backgroundColor = "green";
    square7.style.backgroundColor = "green";
    displayWinnerO();
  }
}

function displayWinnerX() {
  hasSomeoneWon = true;
  heading.innerHTML = "Player <span>X</span> has won!";
  document.body.innerHTML += playAgainButton;
}

function displayWinnerO() {
  hasSomeoneWon = true;
  heading.innerHTML = "Player <span>O</span> has won!";
  document.body.innerHTML += playAgainButton;
}