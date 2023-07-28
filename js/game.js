class Game {
  constructor() {
    //propiedades de mi freddie
    this.freddie = new Freddie();

    //propiedades preguntas
    this.randomquestions = Math.floor(Math.random() * questionsAnswer.length);
    this.pregunta = new Questions(this.randomquestions);

    //propiedad respuestas
    this.AnswersArray = [];
    this.trueAnswer = questionsAnswer[this.randomquestions];
    this.trueAnswerIndex = this.trueAnswer.respuesta;
    this.trueAnswerText = this.trueAnswer.opciones[this.trueAnswerIndex];

    this.isGameOn = true; //booleano -> el juego esta activo
    this.gameWin = false; // booleano -> ganar la partida

    //propiedades de las vidas
    this.livesPlayer = 3; //contador de vidas
    this.livesHeart = new Lives(this.livesPlayer);
    this.winCount = 0; //contador victorias
  }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none"; //ocultar pantalla de juego
    gameoverScreenNode.style.display = "flex"; //mostrar la pantalla final
    this.gameOverSound = new Audio("./sounds/gameOver.mp3");
    this.gameOverSound.pause();
    this.gameOverSound.play();
    this.gameOverSound.volume = 0.1;
  };

  winGame = () => {
    this.gameWin = true; //booleano ganar la partida
    gameoverScreenNode.style.display = "none"; //ocultar la pantalla final
    gameScreenNode.style.display = "none"; //ocultar pantalla de juego
    splashScreenNode.style.display = "none"; //ocultar pantalla
    winScreenNode.style.display = "flex"; // mostrar pantalla
    this.winGameSound = new Audio("./sounds/winGame.mp3");
    this.winGameSound.play();
    this.winGameSound.volume = 0.1;
  };

  avanceQuestion = () => {
    this.pregunta.removeQuestion(); //elimino las preguntas
    this.randomquestions = Math.floor(Math.random() * questionsAnswer.length);
    this.pregunta = new Questions(this.randomquestions);
    console.log(this.pregunta);
    console.log(this.randomquestions);
  };

  avanceAnswer = () => {
    for (let i = 0; i < this.AnswersArray.length; i++) {
      this.AnswersArray[i].removeAnswer(); // pasar por cada respuesta del array y ejecutar el metodo para removerlo del DOM
    }
    this.AnswersArray = []; // vaciar el array

    this.trueAnswer = questionsAnswer[this.randomquestions];
    this.trueAnswerIndex = this.trueAnswer.respuesta;
    this.trueAnswerText = this.trueAnswer.opciones[this.trueAnswerIndex]; // mostrar nuevas respuestas asociadas a la nueva pregunta

    this.freddie.positionInit(); //actualizo posicion de freddie
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
        if (cadaRespuesta.respuesta === this.trueAnswerText) {
          this.winCount++;
          cadaRespuesta.nodeAnswers.classList.add("trueAnswer");
          this.correctAnswer = new Audio("./sounds/correctAnswer.mp3");
          this.correctAnswer.play();
          this.correctAnswer.volume = 0.1;
          this.avanceQuestion();
          this.avanceAnswer();

          if (this.winCount === 4) this.winGame();
        } else {
          this.incorrectAnswer = new Audio("./sounds/incorrectAnswer.mp3");
          this.incorrectAnswer.play();
          this.incorrectAnswer.volume = 0.1;
          this.avanceQuestion();
          this.avanceAnswer();
          cadaRespuesta.nodeAnswers.classList.add("falseAnswer");
          if (this.livesPlayer > 0) {
            this.livesPlayer = this.livesPlayer - 1;
            this.avanceQuestion();
            this.avanceAnswer();
            this.livesHeart.livesPlayer = this.livesPlayer;
            this.livesHeart.updateLives();
          } else if (this.livesPlayer === 0) {
            this.gameOver();
          }
        }
      }
    });
  };

  showAnswer = (numero) => {
    if (this.AnswersArray.length < 4) {
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[0], 300, 350)
      );
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[1], 650, 250)
      );
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[2], 1000, 350)
      );
      this.AnswersArray.push(
        new Answers(questionsAnswer[numero].opciones[3], 1400, 250)
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
