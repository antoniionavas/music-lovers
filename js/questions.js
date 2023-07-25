
class Questions {

    constructor (pregunta){
        
        this.nodeQuestions = document.createElement("div");
        gameBoxNode.append(this.nodeQuestions)

            //Propiedades del div de las preguntas
            this.nodeQuestions.style.fontSize = "30px";
            this.nodeQuestions.style.fontWeight = "bold";
            this.nodeQuestions.style.padding = "25px";
            this.nodeQuestions.style.textAlign = "center";

            //Posicion contenedor
            this.xQuestions = 120; //ejeX
            this.yQuestions = 30; //ejeY
            this.wQuestions = 150; //ancho
            this.hQuestions = 150; //alto
        
            //Tamaño y posicion inicial
            this.node.style.width = `${this.w}px`;
            this.node.style.height = `${this.h}px`;
            this.node.style.position = "absolute";
            this.node.style.top = `${this.y}px`;
            this.node.style.left = `${this.x}px`;
    }

            //Métodos preguntas
}