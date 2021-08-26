
let grille = new Grille();
let pacman = new PacmanClasse(2,2,0);
let fantome = new FantomeClasse();

function tourDeJeux() {
  grille.AfficheGrille();
  pacman.afficherPacman();
  fantome.afficherFantomes();
  pacman.bougePacman();
  fantome.bougefantome();
  pacman.collisionPacman();
  fantome.collisionfantome();
  pacman.sortiePlateau();
  fantome.sortiePlateaufantome();
  pacman.mangerBonbon();
  pacman.testGagné();
  fantome.defaite();
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
let value = setInterval(tourDeJeux, 500);

