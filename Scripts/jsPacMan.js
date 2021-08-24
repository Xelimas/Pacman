function tourDeJeux() {
  AfficheGrille();
  afficherPacman();
  bougePacman();
}
setInterval(tourDeJeux, 500);
