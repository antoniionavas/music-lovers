# MUSIC-LOVERS 

## [MUSIC LOVERS GAME](https://antoniionavas.github.io/music-lovers/)

![Game Logo](./images/start.jpg)

# Descripción

- MUSIC-LOVERS es un juego basado en preguntas y respuestas sobre música

# Funcionalidades Principales:

- El usuario dispone de 3 vidas para jugar, por cada respuesta incorrecta se restará una vida. Si se queda sin vidas perderá la partida. 

- El usuario deberá acertar 4 preguntas para poder ganar la partida. 

- El juego dispone de diferentes sonidos dependiendo de las acciones del jugador y su avance en el juego como por ejemplo, acertar una respuesta, elegir una respuesta errónea, perder la partida o ganar la partida. 


# Funcionalidades Futuras:

- Sistema de puntuación o score que por cada pregunta dependiendo de la dificultad sume una puntuación. 

- Mejorar el diseño de la web (preguntas y respuestas).

- Funcionalidad para mostrar nuevas respuestas.

- Una vez escogida la respuesta cambiar la clase de esta dependiendo si es correcta o no. 

- Mostrar la respuesta correcta al elegir la incorrecta. 

- Que el personaje al elegir su respuesta realice un movimiento.

# Tecnologías Usadas:
- HTML
- CSS
- Javascript
- Manipulación de DOM
- Audio e Imagenes en JS

# Estados:

- Start Screen
- Game Screen
- Win Screen
- Game Over Screen

# Estructura de Proyecto:

## Freddie.js

- Freddie ()
    
    - This.x 
    - This.y
    - This.w
    - This.h
    - This.movementFreddie
    - positionInit()
    - positionUpdate()
    - MoveUp()
    - MoveDown()
    - MoveLeft()
    - MoveRight()
    - DOM Node


## Questions.js

- Questions ()

    - This.xQuestions 
    - This.yQuestions
    - This.wQuestions
    - This.hQuestions
    - DOM Node

## Answers.js

- Answers()
    - This.x
    - This.y
    - This.w
    - This.h
    - DOM Node

## Lives.js

- Lives()
    - This.x
    - This.y
    - This.w
    - This.h
    - This.livesPLayer
    - updateLives()
    - DOM Node


## Game.js

- Game()
    - This.freddie
    - This.randomquestions
    - This.pregunta
    - This.AnswersArray
    - This.trueAnswer
    - This.trueAnswerIndex
    - This.trueAnswerText
    - This.isGameOn
    - This.gameWin
    - This.livesPlayer
    - This.livesHeart
    - This.winCount
    - gameOver()
    - winGame()
    - avanceQuestions()
    - avanceAnswer()
    - collisionFreddieAnswer()
    - showAnswer()
    - gameLoop()
    - This.gameOverSound
    - This.incorrectAnswer
    - This.correctAnswer
    - This.winGameSound
    - DOM Node

## Main.js

- startGame()
- restartGame()
- This.gameSound
- startBtnNode.addEventListener()
- restartBtnNode.addEventListener()
- restartBtnNode2.addEventListener()
- window.addEventListener

## questions-answer.js

 - este archivo contiene mi array con los datos de las preguntas y respuestas

 ## Extra Links

  - Boceto: https://excalidraw.com/#json=8P3ffaabLJjPDgHPpfg6s,aEqlPqNItg8CAUfiMw4fjw 