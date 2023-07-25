
class Answers {

    constructor (respuesta){
        
        //Crea un elemento div 
        this.nodeAnswers = document.createElement("div");
        gameBoxNode.append(this.nodeAnswers)

        //Propiedades del div de las respuestas
        this.nodeAnswers.style.fontSize = "25px";
        this.nodeAnswers.style.fontWeight = "bold";
        this.nodeAnswers.style.padding = "20px";
        this.nodeAnswers.style.textAlign = "center";


         //Posicion contenedor respuesta
         this.xAnswers = 120; //ejeX
         this.yAnswers = 30; //ejeY
         this.wAnswers = 150; //ancho
         this.hAnswers = 150; //alto

        //Tamaño y posicion inicial
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }

    //métodos respuestas

}