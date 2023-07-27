// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen");

let gameObject = null;

// * STATE MANAGEMENT FUNCTIONS

function startGame() {
  console.log("iniciando el juego");

  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  // creo un nuevo objeto de Game e inicia el gameLoop
  gameObject = new Game(); //nueva partida
  gameObject.gameLoop(); // llamamos al objeto e invocamos la funcion de recursion
}


function restartGame() {
  console.log("iniciando el juego");

  gameoverScreenNode.style.display = "none";
  splashScreenNode.style.display = "flex";
  gameBoxNode.innerHTML="";
}


// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", restartGame);


window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    gameObject.freddie.moveUp();
  } else if (event.key === "ArrowDown") {
    gameObject.freddie.moveDown();
  } else if (event.key === "ArrowLeft") {
    gameObject.freddie.moveLeft();
  } else if (event.key === "ArrowRight") {
    gameObject.freddie.moveRight();
  }
});
