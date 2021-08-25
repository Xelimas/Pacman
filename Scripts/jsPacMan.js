function tourDeJeux() {
  AfficheGrille();
  afficherPacman();
  bougePacman();
  collisionPacman();
  sortiePlateau();
}
setInterval(tourDeJeux, 500);
