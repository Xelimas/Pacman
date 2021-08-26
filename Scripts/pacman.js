let points = 0;
let score;
class PacmanClasse {
  x;
  y;
  direction;
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
  /**
   * Fonction permettant d'afficher le pacman sur le plateau
   */
  afficherPacman() {
    let container = document.getElementById("ContainerPacMan");
    let image = document.createElement("img");
    image.src = "./img/pacman4.gif";
    image.style.gridArea = this.y + "/" + this.x;
    container.appendChild(image);
  }

  bougePacman() {
    //gauche / q
    if (this.direction == 2) {
      this.x -= 1;
    }
    //haut / z
    if (this.direction == 3) {
      this.y -= 1;
    }
    //droite / d
    if (this.direction == 0) {
      this.x += 1;
    }
    //bas / s
    if (this.direction == 1) {
      this.y += 1;
    }
  }

  collisionPacman() {
    if (this.direction == 0 && tableau[this.y - 1][this.x - 1] == 0) {
      this.x -= 1;
    }
    if (this.direction == 2 && tableau[this.y - 1][this.x - 1] == 0) {
      this.x += 1;
    }
    if (this.direction == 3 && tableau[this.y - 1][this.x - 1] == 0) {
      this.y += 1;
    }
    if (this.direction == 1 && tableau[this.y - 1][this.x - 1] == 0) {
      this.y -= 1;
    }
  }

  mangerBonbon() {
    if (tableau[this.y - 1][this.x - 1] == 2) {
      tableau[this.y - 1][this.x - 1] = 1;
      let score = document.getElementById("score");
      points += 10;
      score.innerHTML = "Score : " + points;
    }
  }

  sortiePlateau() {
    if (this.direction == 0 && this.x - 1 == 19) {
      this.x = 0;
    }
    if (this.direction == 2 && this.x - 1 == 0) {
      this.x = 19;
    }
  }

  testGagné() {
    if (points == 1900) {
      let score = document.getElementById("score");
      score.innerHTML = "Score : " + points + "<br>" + " Bien joué !!";
      clearInterval(value);
    }
  }
/*
  defaite() {
    for (let ghost = 0; ghost <= 3; ghost++) {
      if (this.y == fantome[ghost].y && this.x == fantome[ghost].x) {
        score = document.getElementById("score");
        score.innerHTML = "Vous avez Perdu !";
        clearInterval(value);
      }
    }
  }*/
}
