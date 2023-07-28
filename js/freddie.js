class Freddie {
  constructor() {
    //creo elemento en el DOM
    this.node = document.createElement("img");
    this.node.src = "./images/freddie.png";
    gameBoxNode.append(this.node);

    //propiedades de mi personaje
    this.x = 700; // posicion eje x
    this.y = 600; // posicion eje y
    this.w = 150; //ancho
    this.h = 150; //alto

    this.movementFreddie = 20;

    //ajustar el tamaño y posicion inicial de Freddie

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  positionUpdate = () => {
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  };

  positionInit = () => {
    //volver a posicion inicial freddie
    this.x = 700;
    this.y = 600;
    this.positionUpdate();
  };

  moveUp = () => {
    if (this.y + this.h + 10 <= gameBoxNode.clientHeight) {
      this.y -= this.movementFreddie;
      this.positionUpdate();
    }
  };

  moveDown = () => {
    if (this.y + this.h + 10 <= gameBoxNode.clientHeight) {
      this.y += this.movementFreddie;
      this.positionUpdate();
    }
  };

  moveLeft = () => {
    if (this.x - 10 >= 0) {
      this.x -= this.movementFreddie;
      this.positionUpdate();
    }
  };

  moveRight = () => {
    if (this.x + this.w + 10 <= gameBoxNode.clientWidth) {
      this.x += this.movementFreddie;
      this.positionUpdate();
    }
  };
}
