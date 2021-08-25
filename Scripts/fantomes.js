let fantomeOrange = { x: 10, y: 10, direction: 0 };
let fantomebleu = { x: 10, y: 9, direction: 1 };
let fantomeRouge = { x: 10, y: 13, direction: 2 };
let fantomeVert = { x: 10, y: 12, direction: 3 };


function afficherFantomes() {
    let container = document.getElementById("ContainerPacMan");
    image1 = document.createElement("img");
    image1.src = "./img/fantome_bleu1.gif";
    image2 = document.createElement("img");
    image2.src = "./img/fantome_orange1.gif";
    image3 = document.createElement("img");
    image3.src = "./img/fantome_vert1.gif";
    image4 = document.createElement("img");
    image4.src = "./img/fantome_rouge1.gif";
    image1.style.gridArea = fantomebleu.y + "/" + fantomebleu.x;
    image2.style.gridArea = fantomeOrange.y + "/" + fantomeOrange.x;
    image3.style.gridArea = fantomeVert.y + "/" + fantomeVert.x;
    image4.style.gridArea = fantomeRouge.y + "/" + fantomeRouge.x;
    container.appendChild(image1);
    container.appendChild(image2);
    container.appendChild(image3);
    container.appendChild(image4);
  }

  
  function bougefantomeOrange() {
    //gauche / q
    if (fantomeOrange.direction == 2) {
        fantomeOrange.x -= 1;
    }
    //haut / z
    if (fantomeOrange.direction == 3) {
        fantomeOrange.y -= 1;
    }
    //droite / d
    if (fantomeOrange.direction == 0) {
        fantomeOrange.x += 1;
    }
    //bas / s
    if (fantomeOrange.direction == 1) {
        fantomeOrange.y += 1;
    }
  }

  function bougefantomebleu() {
    //gauche / q
    if (fantomebleu.direction == 2) {
        fantomebleu.x -= 1;
    }
    //haut / z
    if (fantomebleu.direction == 3) {
        fantomebleu.y -= 1;
    }
    //droite / d
    if (fantomebleu.direction == 0) {
        fantomebleu.x += 1;
    }
    //bas / s
    if (fantomebleu.direction == 1) {
        fantomebleu.y += 1;
    }
  }

  function bougefantomeVert() {
    //gauche / q
    if (fantomeVert.direction == 2) {
        fantomeVert.x -= 1;
    }
    //haut / z
    if (fantomeVert.direction == 3) {
        fantomeVert.y -= 1;
    }
    //droite / d
    if (fantomeVert.direction == 0) {
        fantomeVert.x += 1;
    }
    //bas / s
    if (fantomeVert.direction == 1) {
        fantomeVert.y += 1;
    }
  }

  function bougefantomeRouge() {
    //gauche / q
    if (fantomeRouge.direction == 2) {
        fantomeRouge.x -= 1;
    }
    //haut / z
    if (fantomeRouge.direction == 3) {
        fantomeRouge.y -= 1;
    }
    //droite / d
    if (fantomeRouge.direction == 0) {
        fantomeRouge.x += 1;
    }
    //bas / s
    if (fantomeRouge.direction == 1) {
        fantomeRouge.y += 1;
    }
  }
  function collisionfantomeRouge() {
    if (fantomeRouge.direction == 0 && tableau[fantomeRouge.y - 1][fantomeRouge.x - 1] == 0) {
      
        fantomeRouge.x -= 1;
        fantomeRouge.direction = Math.floor(Math.random() * 4);

    }
    if (fantomeRouge.direction == 2 && tableau[fantomeRouge.y - 1][fantomeRouge.x - 1] == 0) {
      
        fantomeRouge.x += 1;
        fantomeRouge.direction = Math.floor(Math.random() * 4);
    }
    if (fantomeRouge.direction == 3 && tableau[fantomeRouge.y - 1][fantomeRouge.x - 1] == 0) {
      
        fantomeRouge.y += 1;
        fantomeRouge.direction = Math.floor(Math.random() * 4);
    }
    if (fantomeRouge.direction == 1 && tableau[fantomeRouge.y - 1][fantomeRouge.x - 1] == 0) {
      
        fantomeRouge.y -= 1;
        fantomeRouge.direction = Math.floor(Math.random() * 4);
    }
  }

  function collisionfantomeVert() {
    if (fantomeVert.direction == 0 && tableau[fantomeVert.y - 1][fantomeVert.x - 1] == 0) {
      
        fantomeVert.x -= 1;
        fantomeVert.direction = Math.floor(Math.random() * 4); 
    }
    if (fantomeVert.direction == 2 && tableau[fantomeVert.y - 1][fantomeVert.x - 1] == 0) {
      
        fantomeVert.x += 1;
        fantomeVert.direction = Math.floor(Math.random() * 4);
    }
    if (fantomeVert.direction == 3 && tableau[fantomeVert.y - 1][fantomeVert.x - 1] == 0) {
      
        fantomeVert.y += 1;
        fantomeVert.direction = Math.floor(Math.random() * 4);
    }
    if (fantomeVert.direction == 1 && tableau[fantomeVert.y - 1][fantomeVert.x - 1] == 0) {
      
        fantomeVert.y -= 1;
        fantomeVert.direction = Math.floor(Math.random() * 4);
    }
  }
  function collisionfantomebleu() {
    if (fantomebleu.direction == 0 && tableau[fantomebleu.y - 1][fantomebleu.x - 1] == 0) {
      
        fantomebleu.x -= 1;
        fantomebleu.direction = Math.floor(Math.random() * 4);
    }
    if (fantomebleu.direction == 2 && tableau[fantomebleu.y - 1][fantomebleu.x - 1] == 0) {
      
        fantomebleu.x += 1;
        fantomebleu.direction = Math.floor(Math.random() * 4);
    }
    if (fantomebleu.direction == 3 && tableau[fantomebleu.y - 1][fantomebleu.x - 1] == 0) {
      
        fantomebleu.y += 1;
        fantomebleu.direction = Math.floor(Math.random() * 4);
    }
    if (fantomebleu.direction == 1 && tableau[fantomebleu.y - 1][fantomebleu.x - 1] == 0) {
      
        fantomebleu.y -= 1;
        fantomebleu.direction = Math.floor(Math.random() * 4);
    }
  }
  function collisionfantomeOrange() {
    if (fantomeOrange.direction == 0 && tableau[fantomeOrange.y - 1][fantomeOrange.x - 1] == 0) {
      
        fantomeOrange.x -= 1;
        fantomeOrange.direction = Math.floor(Math.random() * 4);
    }
    if (fantomeOrange.direction == 2 && tableau[fantomeOrange.y - 1][fantomeOrange.x - 1] == 0) {
      
        fantomeOrange.x += 1;
        fantomeOrange.direction = Math.floor(Math.random() * 4);
    }
    if (fantomeOrange.direction == 3 && tableau[fantomeOrange.y - 1][fantomeOrange.x - 1] == 0) {
      
        fantomeOrange.y += 1;
        fantomeOrange.direction = Math.floor(Math.random() * 4);
    }
    if (fantomeOrange.direction == 1 && tableau[fantomeOrange.y - 1][fantomeOrange.x - 1] == 0) {
      
        fantomeOrange.y -= 1;
        fantomeOrange.direction = Math.floor(Math.random() * 4);
    }
  }
  function sortiePlateaufantomeRouge() {
    if (fantomeRouge.direction == 0 && fantomeRouge.x - 1 == 19) {
        fantomeRouge.x = 0;
      console.log("sortie droite");
    }
    if (fantomeRouge.direction == 2 && fantomeRouge.x - 1 == 0) {
        fantomeRouge.x = 19;
      console.log("sortie gauche");
    }
  }
  function sortiePlateaufantomeVert() {
    if (fantomeVert.direction == 0 && fantomeVert.x - 1 == 19) {
        fantomeVert.x = 0;
      console.log("sortie droite");
    }
    if (fantomeVert.direction == 2 && fantomeVert.x - 1 == 0) {
        fantomeVert.x = 19;
      console.log("sortie gauche");
    }
  }
  function sortiePlateaufantomebleu() {
    if (fantomebleu.direction == 0 && fantomebleu.x - 1 == 19) {
        fantomebleu.x = 0;
      console.log("sortie droite");
    }
    if (fantomebleu.direction == 2 && fantomebleu.x - 1 == 0) {
        fantomebleu.x = 19;
      console.log("sortie gauche");
    }
  }
  function sortiePlateaufantomeRouge() {
    if (fantomeOrange.direction == 0 && fantomeOrange.x - 1 == 19) {
        fantomeOrange.x = 0;
      console.log("sortie droite");
    }
    if (fantomeOrange.direction == 2 && fantomeOrange.x - 1 == 0) {
        fantomeOrange.x = 19;
      console.log("sortie gauche");
    }
  }
