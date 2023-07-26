
class Answers {

    constructor (numero, positionX, positionY,){
        
        //Crea un elemento div 
        this.numero = numero;
        this.nodeAnswers = document.createElement("div");
        this.nodeAnswers.textContent = this.numero;
        this.nodeAnswers.className = "answerClass";
        this.respuesta = this.numero;

        gameBoxNode.append(this.nodeAnswers)

        
        //propiedades de respuesta
        this.x = positionX; // posicion eje x
        this.y = positionY; // posicion eje y
        this.w = 65;
        this.h = 40;


        //Propiedades del div de las respuestas
        this.nodeAnswers.style.fontSize = "20px";
        this.nodeAnswers.style.fontWeight = "bold";
        this.nodeAnswers.style.padding = "25px";
        this.nodeAnswers.style.textAlign = "center";
        this.nodeAnswers.style.display = "flex";
        this.nodeAnswers.style.justifyContent = "center";


        //Tamaño y posicion inicial
        this.nodeAnswers.style.width = `${this.w}px`;
        this.nodeAnswers.style.height = `${this.h}px`;
        this.nodeAnswers.style.position = "absolute";
        this.nodeAnswers.style.top = `${this.y}px`;
        this.nodeAnswers.style.left = `${this.x}px`;
    }



}