function tourDeJeux() {
  AfficheGrille();
  afficherPacman();
  bougePacman();
  collisionPacman();
}
setInterval(tourDeJeux, 500);
