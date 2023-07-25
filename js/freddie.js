
class Freddie {

    constructor (){
    

    //creo elemento en el DOM
    this.node = document.createElement("img");
    this.node.src = "./images/freddie.png"
    gameBoxNode.append(this.node)

    //propiedades de mi personaje
    this.x = 250; // posicion eje x
    this.y = 600; // posicion eje y
    this.w = 150; //ancho
    this.h = 150; //alto

    //ajustar el tamaño y posicion inicial de Freddie

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    }


    //métodos de mi personaje

    rotationEffect = () => {
    
    
    }


}