
class Answers {

    constructor (respuesta){
        
        this.nodeAnswers = document.createElement("div");
        gameBoxNode.append(this.nodeAnswers)

        //Propiedades de las respuestas

        this.nodeAnswers.style.fontSize = "25px";
        this.nodeAnswers.style.fontWeight = "bold";
        this.nodeAnswers.style.padding = "20px";
        this.nodeAnswers.style.textAlign = "center";


         //Posicion contenedor respuesta
         this.xAnswers = 120; //ejeX
         this.yAnswers = 30; //ejeY
         this.wAnswers = 150; //ancho
         this.hAnswers = 150; //alto
    }
}