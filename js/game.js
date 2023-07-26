
class Game{
    

    constructor(){
        //propiedades de mi juego
        

         //propiedades de mi freddie
         this.freddie = new Freddie ();
         //propiedades preguntas
         this.randomquestions =  Math.floor(Math.random() * questionsAnswer.length);
         this.pregunta = new Questions (this.randomquestions);
         //propiedad respuestas
            this.AnswersArray = [];
            this.isGameOn = true;
    }

    showAnswer = (numero) => { 
        if (this.AnswersArray.length < 4){
            this.AnswersArray.push(new Answers(questionsAnswer[numero].opciones[0], 130, 350));
            this.AnswersArray.push(new Answers(questionsAnswer[numero].opciones[1], 350, 250));
            this.AnswersArray.push(new Answers(questionsAnswer[numero].opciones[2], 700, 350));
            this.AnswersArray.push(new Answers(questionsAnswer[numero].opciones[3], 1000, 250));
            }   
        }


    gameLoop = () => {

        this.showAnswer(this.randomquestions); //invoco a la función de las respuestas


        if (this.isGameOn === true) {
            requestAnimationFrame (this.gameLoop); 
            }
        }

  
}







//PLANIFICACIÓN

//PROPIEDADES
//freddy -> x, y, h, w
//questionsdiv -> x, y, h, w
//answerdiv -> x, y, h, w
//vidas -> x, y, h, w
//score -> x, y, h, w

//METODOS
//posicionar las q&a
//movimiento de las q&a
//colision del personaje con la respuesta elegida por el user
//movimiento del personaje
//acción vidas (respuesta incorrecta )
//accion score (respuesta correcta )
//finish screen
//gameover screen
//reinicio 

//EXTRA
//accion del personaje
//score
//tiempo restante para contestar
//accion música x tiempo para elegir respuesta