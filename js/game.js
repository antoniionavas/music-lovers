console.log("desde game.js")

class Game{
    

    constructor(){
        //propiedades de mi juego
        



         //propiedades de mi freddie
         this.freddie = new Freddie ();
         this.pregunta = new Questions ();

    }

    gameLoop = () => {
    
        requestAnimationFrame (this.gameLoop); 

    }

    generarPreguntas = () => {
    
        for (i = 0; questionsAnswer.length > i; i++){
        
            return questionsAnswer[i]["pregunta"];
        }
    }


    generarRespuestas = () => {
    
        for (i = 0; questionsAnswer.length > i; i++){
        
            return questionsAnswer[i]["respuesta"];
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