const gameVar = document.getElementById("game");

let x = 50;
let i = 0
let j = 0
let positionX = x + "%";


function createCharacter() {
    let character = document.createElement("div");
    character.setAttribute("id", "character");
    character.classList.add("characterDiv");
    character.style.left = positionX;
    character.style.top = "90%";
    document.body.appendChild(character);
    let charVis = document.createElement("img");
    charVis.setAttribute("src", "images/cat.jpeg");
    charVis.setAttribute("class", "character");
    character.appendChild(charVis);
}

document.addEventListener('keydown', logKey);


function keyCheck() {
        setTimeout(() => { 
                logKey(e);
                i++
                if (i < Infinity) {
                    keyCheck();
                }
        }, 10);
}

function logKey(e) {
    let key = ` ${e.code}`
    key = key.toString();
    i = 0;
    j = 0;
    if (key == ' KeyA') {
        moveLeft();
      } else if (key == ' KeyD') {
        moveRight();
      }
}


function moveLeft() {
    if(positionX == "2%") {
        i = 50;
    } else {
        setTimeout(() => { 
            x = x - 1
            positionX = x + "%";
            character.style.left = positionX;
            i++
            if (i < 10) {
                moveLeft();
            }
        }, 10);
    }
}

function moveRight() {
    if(positionX == "95%") {
        j = 50;
    } else {
        setTimeout(() => { 
            x = x + 1
            positionX = x + "%";
            character.style.left = positionX;
            j++
            if (j < 10) {
                moveRight();
            }
        }, 10);
    }
}


createCharacter();