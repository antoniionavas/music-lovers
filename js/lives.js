
class Lives {

    constructor (livesPlayer){
        
    //creo elemento en el DOM
    this.nodeLives = document.createElement("div");
    this.nodeLives.style.backgroundImage = `url("./images/lives.png")`;
    this.nodeLives.style.backgroundSize = "contain";
    this.nodeLives.style.fontSize = "35px";
    this.nodeLives.style.fontWeight = "bold";
    this.nodeLives.style.padding ="40px";
    this.nodeLives.style.backgroundRepeat = "no-repeat";
    gameBoxNode.append(this.nodeLives);
    this.livesPlayer = livesPlayer;
    this.nodeLives.innerText = this.livesPlayer;



    //propiedades de mi corazon
        this.x = 50; // posicion eje x
        this.y = 40; // posicion eje y
        this.w = 80; //ancho
        this.h = 60; //alto

    //ajustar el tamaño y posicion inicial del Corazon

        this.nodeLives.style.width = `${this.w}px`;
        this.nodeLives.style.height = `${this.h}px`;
        this.nodeLives.style.position = "absolute";
        this.nodeLives.style.top = `${this.y}px`;
        this.nodeLives.style.left = `${this.x}px`;

    }

    updateLives = () => {

        this.nodeLives.innerText = this.livesPlayer;
    }   
}