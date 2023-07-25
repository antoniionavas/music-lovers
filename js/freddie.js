
class Freddie {

    constructor (){
    

    //creo elemento en el DOM
    this.node = document.createElement("img");
    this.node.src = "./images/freddie.png"
    gameBoxNode.append(this.node)

    //propiedades de mi personaje
    this.xFreddie = 250; // posicion eje x
    this.yFreddie = 600; // posicion eje y
    this.wFreddie = 150; //ancho
    this.hFreddie = 150; //alto

    //ajustar el tamaño y posicion inicial de Freddie

    this.node.style.width = `${this.wFreddie}px`;
    this.node.style.height = `${this.hFreddie}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.yFreddie}px`;
    this.node.style.left = `${this.xFreddie}px`;
    }


    //métodos de mi personaje
    positionFreddie = () => {
        this.node.style.left = `${this.xFreddie}px`;
        this.node.style.top = `${this.yFreddie}px`;
    }

}