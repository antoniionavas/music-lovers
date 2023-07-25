
class Questions {

    constructor (pregunta){
        this.randomquestions = pregunta;
        this.nodeQuestions = document.createElement("div");
        this.nodeQuestions.textContent = questionsAnswer[this.randomquestions].pregunta;
        this.nodeQuestions.id = "question";
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
            this.nodeQuestions.style.width = `${this.w}px`;
            this.nodeQuestions.style.height = `${this.h}px`;
            this.nodeQuestions.style.position = "absolute";
            this.nodeQuestions.style.top = `${this.y}px`;
            this.nodeQuestions.style.left = `${this.x}px`;
    }

            //Métodos preguntas
}