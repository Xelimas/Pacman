let fantome = [
  { x: 10, y: 10, direction: 0 },
  { x: 10, y: 9, direction: 1 },
  { x: 10, y: 13, direction: 2 },
  { x: 10, y: 12, direction: 3 },
];

function afficherFantomes() {
  let container = document.getElementById("ContainerPacMan");
  image1 = document.createElement("img");
  image1.src = "./img/fantome_bleu1.gif";
  image2 = document.createElement("img");
  image2.src = "./img/fantome_orange1.gif";
  image3 = document.createElement("img");
  image3.src = "./img/fantome_vert1.gif";
  image4 = document.createElement("img");
  image4.src = "./img/fantome_rouge1.gif";
  image1.style.gridArea = fantome[2].y + "/" + fantome[2].x;
  image2.style.gridArea = fantome[0].y + "/" + fantome[0].x;
  image3.style.gridArea = fantome[3].y + "/" + fantome[3].x;
  image4.style.gridArea = fantome[1].y + "/" + fantome[1].x;
  container.appendChild(image1);
  container.appendChild(image2);
  container.appendChild(image3);
  container.appendChild(image4);
}

function bougefantome() {
  for (let ghost = 0; ghost <= 3; ghost++) {
    //gauche / q
    if (fantome[ghost].direction == 2) {
      fantome[ghost].x -= 1;
    }
    //haut / z
    if (fantome[ghost].direction == 3) {
      fantome[ghost].y -= 1;
    }
    //droite / d
    if (fantome[ghost].direction == 0) {
      fantome[ghost].x += 1;
    }
    //bas / s
    if (fantome[ghost].direction == 1) {
      fantome[ghost].y += 1;
    }
  }
}

function collisionfantome() {
  for (let ghost = 0; ghost <= 3; ghost++) {
    if (
      fantome[ghost].direction == 0 &&
      tableau[fantome[ghost].y - 1][fantome[ghost].x - 1] == 0
    ) {
      fantome[ghost].x -= 1;
      fantome[ghost].direction = Math.floor(Math.random() * 4);
    }
    if (
      fantome[ghost].direction == 2 &&
      tableau[fantome[ghost].y - 1][fantome[ghost].x - 1] == 0
    ) {
      fantome[ghost].x += 1;
      fantome[ghost].direction = Math.floor(Math.random() * 4);
    }
    if (
      fantome[ghost].direction == 3 &&
      tableau[fantome[ghost].y - 1][fantome[ghost].x - 1] == 0
    ) {
      fantome[ghost].y += 1;
      fantome[ghost].direction = Math.floor(Math.random() * 4);
    }
    if (
      fantome[ghost].direction == 1 &&
      tableau[fantome[ghost].y - 1][fantome[ghost].x - 1] == 0
    ) {
      fantome[ghost].y -= 1;
      fantome[ghost].direction = Math.floor(Math.random() * 4);
    }
  }
}

function sortiePlateaufantome() {
  for (let ghost = 0; ghost <= 3; ghost++) {
    if (fantome[ghost].direction == 0 && fantome[ghost].x - 1 == 19) {
      fantome[ghost].x = 0;
    }
    if (fantome[ghost].direction == 2 && fantome[ghost].x - 1 == 0) {
      fantome[ghost].x = 19;
    }
  }
}
