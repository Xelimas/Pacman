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
  defaite();
  testGagné();
}
setInterval(tourDeJeux, 700);
