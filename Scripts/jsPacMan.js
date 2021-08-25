function tourDeJeux() {
  AfficheGrille();
  afficherPacman();
  afficherFantomes();
  bougePacman();
  bougefantomeOrange();
  bougefantomebleu();
  bougefantomeVert();
  bougefantomeRouge();
  collisionPacman();
  collisionfantomeRouge();
  collisionfantomeVert();
  collisionfantomebleu();
  collisionfantomeOrange();
  sortiePlateau();
  mangerBonbon();
  testGagné();
}
setInterval(tourDeJeux, 600);
