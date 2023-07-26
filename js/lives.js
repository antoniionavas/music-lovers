
class Lives {

    constructor (){
        
    //creo elemento en el DOM
        this.nodeLives = document.createElement("img");
        this.nodeLives.src = "./images/lives.png";
        gameBoxNode.append(this.nodeLives);
    
    //propiedades de mi corazon
        this.x = 500; // posicion eje x
        this.y = 200; // posicion eje y
        this.w = 300; //ancho
        this.h = 150; //alto

    //ajustar el tamaño y posicion inicial del Corazon

        this.nodeLives.style.width = `${this.w}px`;
        this.nodeLives.style.height = `${this.h}px`;
        this.nodeLives.style.position = "absolute";
        this.nodeLives.style.top = `${this.y}px`;
        this.nodeLives.style.left = `${this.x}px`;

    }



}