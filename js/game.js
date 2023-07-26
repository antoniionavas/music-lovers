class Game {
  constructor() {
    //propiedades de mi freddie
    this.freddie = new Freddie();
    //propiedades preguntas
    this.randomquestions = Math.floor(Math.random() * questionsAnswer.length);
    this.pregunta = new Questions(this.randomquestions);
    //propiedad respuestas
    this.AnswersArray = [];
    this.trueAnswer = questionsAnswer[numero].opcion[i]
    this.isGameOn = true;
  }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none"; //ocultar pantalla de juego
    gameoverScreenNode.style.display = "flex"; //mostrar la pantalla final
  };

  collisionFreddieAnswer = () => {
    this.AnswersArray.forEach((cadaRespuesta) => {
      //las respuestas => respuesta
      if (
        this.freddie.x < cadaRespuesta.x + cadaRespuesta.w &&
        this.freddie.x + this.freddie.w > cadaRespuesta.x &&
        this.freddie.y < cadaRespuesta.y + cadaRespuesta.h &&
        this.freddie.y + this.freddie.h > cadaRespuesta.y
      ) {
            if (cadaRespuesta.respuesta === this.trueAnswer){
                console.log("respuesta correcta")
            } else {
            
                console.log("respuesta incorrecta")
            }
        }
    });
  };






  showAnswer = (numero) => {
    if (this.AnswersArray.length < 4) {
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[0], 130, 350, questionsAnswer[numero].respuesta)
      );
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[1], 350, 250, questionsAnswer[numero].respuesta)
      );
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[2], 700, 350, questionsAnswer[numero].respuesta)
      );
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[3], 1000, 250, questionsAnswer[numero].respuesta)
      );
    }
  };

  gameLoop = () => {
    this.showAnswer(this.randomquestions); //invoco a la función de las respuestas
    this.collisionFreddieAnswer(); //invoco a la función de colisión las respuestas
    this.freddie.positionUpdate(); //actualizando posicion de freddie

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    } // si isGameOn es falso deten la recursion
  };


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
