// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const restartBtnNode2 = document.querySelector("#restart-btn2");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen");
const winScreenNode = document.querySelector("#win-screen");


let gameObject = null;

// * STATE MANAGEMENT FUNCTIONS

function startGame() {
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  gameBoxNode.style.display ="flex";
  winScreenNode.style.display = "none";

  // creo un nuevo objeto de Game e inicia el gameLoop
  gameObject = new Game(); //nueva partida
  gameObject.gameLoop(); // llamamos al objeto e invocamos la funcion de recursion

  this.gameSound = new Audio (
    "./sounds/tiktokGame.mp3"
    );
  this.gameSound.play();
  this.gameSound.volume = 0.1;
}


function restartGame() {
  gameoverScreenNode.style.display = "none";
  splashScreenNode.style.display = "flex";
  winScreenNode.style.display = "none";
  gameBoxNode.innerHTML="";
  this.gameSound.pause();
  
}


// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", restartGame);
restartBtnNode2.addEventListener("click", restartGame);

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
