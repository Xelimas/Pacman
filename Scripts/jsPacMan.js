function tourDeJeux() {
  AfficheGrille();
  afficherPacman();
  afficherFantomes();
  bougePacman();
  bougefantome();
  collisionPacman();
  collisionfantome();
  sortiePlateau();
  sortiePlateaufantome();
  mangerBonbon();
  testGagné();
  defaite();
}
var value = setInterval(tourDeJeux, 700);
