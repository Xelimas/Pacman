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
  sortiePlateaufantomeRouge();
  sortiePlateaufantomeVert();
  sortiePlateaufantomebleu();
  sortiePlateaufantomeRouge();
  mangerBonbon();
  testGagné();
  defaite();
}
var value = setInterval(tourDeJeux, 700);
