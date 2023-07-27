class Game {
  constructor() {
    //propiedades de mi freddie
    this.freddie = new Freddie();

    //propiedades preguntas
    this.randomquestions = Math.floor(Math.random() * questionsAnswer.length);
    this.pregunta = new Questions(this.randomquestions);

    //propiedad respuestas
    this.AnswersArray = [];
    this.trueAnswer = questionsAnswer[this.randomquestions]
    this.trueAnswerIndex = this.trueAnswer.respuesta;
    this.trueAnswerText  = this.trueAnswer.opciones[this.trueAnswerIndex];
    
    this.isGameOn = true;

    //propiedades de las vidas
    this.livesHeart = new Lives();
    //contadorVidas = 4;

  }


  // numeroVida = () => {
  //   if (contadorVidas > 0) {
  //     console.log("reste una vida");
  //     contadorVidas = contadorVidas - 1;
  //   }
  //   else if (contadorVidas === 0) {
  //     console.log("gameOver");
  //     //this.gameOver();
  //   }
  //     return contadorVidas;
  // }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none"; //ocultar pantalla de juego
    gameoverScreenNode.style.display = "flex"; //mostrar la pantalla final
  };


  avanceQuestion  = () => { 
    this.pregunta.removeQuestion();
    this.randomquestions = Math.floor(Math.random() * questionsAnswer.length);
    this.pregunta = new Questions(this.randomquestions);
 
    }


   avanceAnswer = () => { 
    for (let i = 0; i < this.AnswersArray.length; i++){   
    
    this.AnswersArray[i].removeAnswer(); // pasar por cada respuesta del array y ejecutar el metodo para removerlo del DOM
    
    }                                   
    this.AnswersArray = []; // vaciar el array 
     this.showAnswer(numero); // mostrar nuevas respuestas asociadas a la nueva pregunta
                              //volver a posicion inicial freddie
  }


  collisionFreddieAnswer = () => {
    this.AnswersArray.forEach((cadaRespuesta) => {
      //las respuestas => respuesta
      if (
        this.freddie.x < cadaRespuesta.x + cadaRespuesta.w &&
        this.freddie.x + this.freddie.w > cadaRespuesta.x &&
        this.freddie.y < cadaRespuesta.y + cadaRespuesta.h &&
        this.freddie.y + this.freddie.h > cadaRespuesta.y
        
      ) {
        console.log(cadaRespuesta.respuesta);
        console.log(this.trueAnswerText);
            if (cadaRespuesta.respuesta === this.trueAnswerText){
                console.log("respuesta correcta")
                cadaRespuesta.nodeAnswers.classList.add("trueAnswer");
                this.avanceQuestion();
                this.avanceAnswer();

            } else {
            
                console.log("respuesta incorrecta")
                //this.numeroVida();
            }
        }
    });
  };

  showAnswer = (numero) => {
    if (this.AnswersArray.length < 4) {
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[0], 130, 350,)
      );
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[1], 350, 250,)
      );
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[2], 700, 350,)
      );
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[3], 1000, 250,)
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

//contandor de vidas que se reste cuando se falla una pregunta o sino gameover
//cuando se acierten las preguntas sumar puntuacion
//aparecer nuevas respuestas y preguntas cuando se acierte la respuesta 
//pantalla de Win / score
