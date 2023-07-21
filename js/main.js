// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen");

let gameObject = null; 

// * STATE MANAGEMENT FUNCTIONS

function startGame(){

    console.log("iniciando el juego")

    splashScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";

    // .. que el juego inicie
    //pendiente crear un nuevo objeto de Game e inicia el gameLoop
    gameObject = new Game(); //nueva partida 
    console.log(gameObj)

    gameObject.gameLoop()

}



// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame)  







