
class Questions {

    constructor (numero){
        this.randomquestions = numero;
        this.nodeQuestions = document.createElement("div");
        this.nodeQuestions.textContent = questionsAnswer[this.randomquestions].pregunta;
        this.nodeQuestions.id = "question";
        gameBoxNode.append(this.nodeQuestions)  

            //Posicion contenedor
            this.xQuestions = 100; //ejeX
            this.yQuestions = 50; //ejeY
            this.wQuestions = 150; //ancho
            this.hQuestions = 150; //alto
        
  
    }
}