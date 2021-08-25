let pacman = { x: 2, y: 2, direction: 0 };

/**
 * Fonction permettant d'afficher le pacman sur le plateau
 */
function afficherPacman() {
  let container = document.getElementById("ContainerPacMan");
  image = document.createElement("img");
  image.src = "./img/pacman4.gif";
  image.style.gridArea = pacman.y + "/" + pacman.x;
  container.appendChild(image);
}

document.body.addEventListener("keydown", changeDir);

function changeDir(e) {
  //gauche / q
  if (e.code == "KeyA") {
    pacman.direction = 2;
  }
  //haut / z
  else if (e.code == "KeyW") {
    pacman.direction = 3;
  }
  //droite / d
  else if (e.code == "KeyD") {
    pacman.direction = 0;
  }
  //bas / s
  else if (e.code == "KeyS") {
    pacman.direction = 1;
  }
}

function bougePacman() {
  //gauche / q
  if (pacman.direction == 2) {
    pacman.x -= 1;
  }
  //haut / z
  if (pacman.direction == 3) {
    pacman.y -= 1;
  }
  //droite / d
  if (pacman.direction == 0) {
    pacman.x += 1;
  }
  //bas / s
  if (pacman.direction == 1) {
    pacman.y += 1;
  }
}

function collisionPacman() {
  if (pacman.direction == 0 && tableau[pacman.y-1][pacman.x-1] == 0) {
    console.log("mur");
    pacman.x -= 1;
  } 
  if (pacman.direction == 2 && tableau[pacman.y-1][pacman.x-1] == 0) {
    console.log("mur");
    pacman.x += 1;
  }
  if (pacman.direction == 3 && tableau[pacman.y-1][pacman.x-1] == 0) {
    console.log("mur");
    pacman.y += 1;
  } 
  if (pacman.direction == 1 && tableau[pacman.y-1][pacman.x-1] == 0) {
    console.log("mur");
    pacman.y -= 1;
  } 

  
  // if (tableau[pacman.x][pacman.y] !== 2) {
  //     console.log("sol");
  //     let container = document.getElementById("ContainerPacMan");
  //     image = document.createElement("img");
  //     image.src = "./img/sol.gif";
  //     image.style.gridArea = pacman.y + "/" + pacman.x;
  //     container.appendChild(image);

  // }
}
