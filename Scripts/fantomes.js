class FantomeClasse {
  x;
  y;
  direction;

  constructor() {
    this.fantome = [
      { x: 10, y: 10, direction: 0 },
      { x: 10, y: 9, direction: 1 },
      { x: 10, y: 13, direction: 2 },
      { x: 10, y: 12, direction: 3 }
    ];
  }
  afficherFantomes() {
    let container = document.getElementById("ContainerPacMan");
    let image1 = document.createElement("img");
    image1.src = "./img/fantome_bleu1.gif";
    let image2 = document.createElement("img");
    image2.src = "./img/fantome_orange1.gif";
    let image3 = document.createElement("img");
    image3.src = "./img/fantome_vert1.gif";
    let image4 = document.createElement("img");
    image4.src = "./img/fantome_rouge1.gif";
    image1.style.gridArea = this.fantome[2].y + "/" + this.fantome[2].x;
    image2.style.gridArea = this.fantome[0].y + "/" + this.fantome[0].x;
    image3.style.gridArea = this.fantome[3].y + "/" + this.fantome[3].x;
    image4.style.gridArea = this.fantome[1].y + "/" + this.fantome[1].x;
    container.appendChild(image1);
    container.appendChild(image2);
    container.appendChild(image3);
    container.appendChild(image4);
  }

  bougefantome() {
    for (let ghost = 0; ghost <= 3; ghost++) {
      //gauche / q
      if (this.fantome[ghost].direction == 2) {
        this.fantome[ghost].x -= 1;
      }
      //haut / z
      if (this.fantome[ghost].direction == 3) {
        this.fantome[ghost].y -= 1;
      }
      //droite / d
      if (this.fantome[ghost].direction == 0) {
        this.fantome[ghost].x += 1;
      }
      //bas / s
      if (this.fantome[ghost].direction == 1) {
        this.fantome[ghost].y += 1;
      }
    }
  }

  collisionfantome() {
    for (let ghost = 0; ghost <= 3; ghost++) {
      if (
        this.fantome[ghost].direction == 0 &&
        tableau[this.fantome[ghost].y - 1][this.fantome[ghost].x - 1] == 0
      ) {
        this.fantome[ghost].x -= 1;
        this.fantome[ghost].direction = Math.floor(Math.random() * 4);
      }
      if (
        this.fantome[ghost].direction == 2 &&
        tableau[this.fantome[ghost].y - 1][this.fantome[ghost].x - 1] == 0
      ) {
        this.fantome[ghost].x += 1;
        this.fantome[ghost].direction = Math.floor(Math.random() * 4);
      }
      if (
        this.fantome[ghost].direction == 3 &&
        tableau[this.fantome[ghost].y - 1][this.fantome[ghost].x - 1] == 0
      ) {
        this.fantome[ghost].y += 1;
        this.fantome[ghost].direction = Math.floor(Math.random() * 4);
      }
      if (
        this.fantome[ghost].direction == 1 &&
        tableau[this.fantome[ghost].y - 1][this.fantome[ghost].x - 1] == 0
      ) {
        this.fantome[ghost].y -= 1;
        this.fantome[ghost].direction = Math.floor(Math.random() * 4);
      }
    }
  }

  sortiePlateaufantome() {
    for (let ghost = 0; ghost <= 3; ghost++) {
      if (
        this.fantome[ghost].direction == 0 &&
        this.fantome[ghost].x - 1 == 19
      ) {
        this.fantome[ghost].x = 0;
      }
      if (
        this.fantome[ghost].direction == 2 &&
        this.fantome[ghost].x - 1 == 0
      ) {
        this.fantome[ghost].x = 19;
      }
    }
  }
  defaite() {
    for (let ghost = 0; ghost <= 3; ghost++) {
      if (pacman.y == this.fantome[ghost].y && pacman.x == this.fantome[ghost].x) {
        score = document.getElementById("score");
        score.innerHTML = "Vous avez Perdu !";
        clearInterval(value);
      }
    }
  }
}
