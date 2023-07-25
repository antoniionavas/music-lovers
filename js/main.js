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

    // creo un nuevo objeto de Game e inicia el gameLoop
    gameObject = new Game(); //nueva partida 
    gameObject.gameLoop() // llamamos al objeto e invocamos la funcion de recursion

    
}







// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame)  

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight"){
        this.xFreddie += 20;
    } else if (event.key === "ArrowLeft"){
        this.xFreddie -= 20;
    } else if (event.key === "ArrowUp"){
        this.yFreddie += 20;
    } else if (event.key === "ArrowDown"){
        this.yFreddie -= 20;
    }
})





