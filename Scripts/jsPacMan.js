function tourDeJeux() {
  AfficheGrille();
  afficherPacman();
  bougePacman();
  collisionPacman();
  sortiePlateau();
  mangerBonbon();
  testGagné();
}
setInterval(tourDeJeux, 600);
