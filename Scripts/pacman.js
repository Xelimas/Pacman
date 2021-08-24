let pacman = { x: 3, y: 4, direction: 0 };

/**
 * Fonction permettant d'afficher le pacman sur le plateau
 */
function afficherPacman() {
    let container = document.getElementById("ContainerPacMan");
    image = document.createElement("img");
    image.src = "./img/pacman4.gif";
    image.style.gridArea = 2 / 2 ;
    container.appendChild(image);
    

}

/*
function afficherPacman() {
    let test = document.getElementById("20");
    let container = document.getElementById("ContainerPacMan");
    image = document.createElement("img");
    image.src = "./img/pacman4.gif";
    image.style.backgroundImage = "url('./img/sol.gif')";
    container.replaceChild(image,test);

}*/