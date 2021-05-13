const gameVar = document.getElementById("game");

let x = 0
let y = 0

function createCharacter() {
    let character = document.createElement("div");
    character.setAttribute("id", "character");
    character.classList.add("characterDiv");
    character.style.left = x;
    character.style.top = y;
    document.body.appendChild(character);
    let charVis = document.createElement("img");
    charVis.setAttribute("src", "images/cat.jpeg");
    charVis.setAttribute("class", "character");
    character.appendChild(charVis);
}


function logKey(e) {
    let key = ` ${e.code}`
    key = key.toString();
    if (key == ' KeyW') {
        moveUp();
      } else if (key == ' KeyA') {
          moveLeft();
      } else if (key == ' KeyS') {
          moveDown();
      } else if (key == ' KeyD') {
          moveRight();
      } else if (key == ' KeyL') {
          //hi
      }
}

createCharacter();