let x = 50;
let i = 0;
let j = 0;
let k = 0;
let positionX = x + "%";
let laserPosition = 50;
let positionY = 75;
let enemyStart = 10;
let enemyX = 10;
let enemyCurrentPos1 = 0;
let enemyCurrentPos2 = 0;
let shopOpen = false;

let points = 0;

let shot1 = 1;

const gameVar = document.createElement("div");
gameVar.setAttribute("id", "game");
document.body.appendChild(gameVar);

const enemies = document.createElement("div");
enemies.setAttribute("id", "enemies");
document.body.appendChild(enemies);

const laserHolder = document.createElement("div");
laserHolder.setAttribute("id", "laserHolder");
document.body.appendChild(laserHolder);

let character = document.createElement("div");
character.setAttribute("id", "character");
character.classList.add("characterDiv");
character.style.left = positionX;
character.style.top = "80%";

let charVis = document.createElement("img");
charVis.setAttribute("src", "images/cat.jpeg");
charVis.setAttribute("class", "character");

let score = document.createElement("div");
score.setAttribute("id", "score");
score.setAttribute("class", "score");
gameVar.appendChild(score);

let upgradeOne = document.createElement("div");
    upgradeOne.setAttribute("id", "upOne");
    upgradeOne.setAttribute("class", "upOne");
    upgradeOne.innerHTML = "||"

function startGame() {
    createCharacter();
    createEnemy();
    setScore();
    shopButton();
}

function setScore() {
    document.getElementById("score").innerHTML = "Score: " + points;
}

function createCharacter() {
    gameVar.appendChild(character);
    character.appendChild(charVis);
}

function createEnemy() {
    let enemy = document.createElement("div");
    enemy.setAttribute("id", "enemy");
    enemy.classList.add("enemy");
    enemy.style.left = enemyX + "%";
    enemy.style.top = enemyStart + "%"

    let enemyVis = document.createElement("img");
    enemyVis.setAttribute("src", "images/enemy.jpg");
    enemyVis.classList.add("enemyVis");

    enemies.appendChild(enemy);
    enemy.appendChild(enemyVis);
    trackPosition();
}

document.addEventListener('keydown', logKey);

document.addEventListener('click', laserEyes)

function logKey(e) {
    let key = ` ${e.code}`
    key = key.toString();
    i = 0;
    j = 0;
    if (key == ' KeyA') {
        moveLeft();
      } else if (key == ' KeyD') {
        moveRight();
      } else if (key == ' KeyO') {
        createEnemy();
      } else if (key == ' KeyY') {
      }
}

function lotsOfLasers() {
    setTimeout(() => {
        laserEyes();
        k++
        if(k < 4) {
            lotsOfLasers();
        }
    }, 250)
}

function trackPosition() {
    m = 0
    setTimeout(() => {
        m++
        enemyCurrentPos1 = (enemy.getBoundingClientRect().left) - 50;
        enemyCurrentPos2 = (enemy.getBoundingClientRect().right) + 50;
        if(m < Infinity) {
            trackPosition();
        }
    }, 10);
}

function laserEyes() {
    if(shopOpen == false) {
        let laser = document.createElement("a");
        laser.setAttribute("id", "laser");
        laser.classList.add("laser");
        positionY = 75;
        laserPosition = x;
        laser.style.left = laserPosition + "%";
        laser.style.top = positionY + "%"
        laserHolder.appendChild(laser);
        let laserPos1 = laser.getBoundingClientRect().left;
        let laserPos2 = laser.getBoundingClientRect().right;
        laserMove();
        let y = 75
        function laserMove() {
            let l = 0
            setTimeout(() => {
                if(y < 18) {
                    if (laserPos1 >= enemyCurrentPos1) {
                        if (laserPos2 <= enemyCurrentPos2) {
                            laserHolder.removeChild(laser);
                            successfulHit();
                        }
                    }
                } 
                y = y - 2;
                        laser.style.top = y + "%"
                        l++
                        if (l < 50) {
                            laserMove();
                    }
            }, 10);
        }
        setTimeout(() => {
            laser.classList.remove("laser");
            laserHolder.removeChild(laser);
        }, 400);
    }
}

function successfulHit() {
    points = points + shot1;
    function showDamage() {
        damageY = 5;
        let damage = document.createElement("div");
        damage.setAttribute("id", "damage");
        damage.setAttribute("class", "damage");
        damage.style.top = damageY + "%";
        damage.style.opacity = 1;
        damage.innerHTML = "-" + shot1;
        damage.style.left = ((enemyCurrentPos1 + 50) + (Math.floor(Math.random() * 100))) + "px";
        damage.style.top = (damageY + (Math.floor(Math.random() * 7))) + "%"
        gameVar.appendChild(damage);
        function damageFade() {
            setTimeout(() => {
                if(damage.style.opacity > 0) {
                    damage.style.opacity = damage.style.opacity - 0.01
                    damageFade();
                }
            }, 10)
        }
        setTimeout(() => {
            damageFade();
        }, 250)
        setTimeout(() => {
            gameVar.removeChild(damage);
        }, 1000)
    }
    showDamage();
    document.getElementById("score").innerHTML = "Score: " + points;
}

function moveLeft() {
    if(shopOpen == false) {
        if(x < 5) {
            positionX = "10%"
            character.style.left = positionX
        } else if(positionX == "10%") {
            i = 50;
        } else {
            setTimeout(() => { 
                x = x - 0.5
                positionX = x + "%";
                character.style.left = positionX;
                i++
                if (i < 10) {
                    moveLeft();
                }
            }, 10);
        }
    }
}

function moveRight() {
    if(shopOpen == false) {
        if(x > 95) {
            positionX = "90%"
            character.style.left = positionX
        } else if(positionX == "90%") {
            i = 50;
        } else {
            setTimeout(() => { 
                x = x + 0.5
                positionX = x + "%";
                character.style.left = positionX;
                j++
                if (j < 10) {
                    moveRight();
                }
            }, 10);
        }
    }
}

function isColliding() {
    alert(checkOverlap());
}

window.setInterval(() => {
}, 50);


// Everything for the shop

let shopMenu = document.createElement("div");
shopMenu.setAttribute("id", "shopMenu");
shopMenu.setAttribute("class", "shopMenu");
shopMenu.innerHTML = "Shop";

let shopMenuBG = document.createElement("div");
shopMenuBG.setAttribute("id", "shopMenuBG");
shopMenuBG.setAttribute("class", "shopMenuBG");

let closeShop = document.createElement("div");
closeShop.setAttribute("id", "closeShop");
closeShop.setAttribute("class", "closeShop");
closeShop.innerHTML = "X";
closeShop.onclick = function closeShop() {
    gameVar.removeChild(shopMenu);
    gameVar.removeChild(shopMenuBG);
    shopOpen = false;
    removeCloseShop();
    hideUpgrades();
}

function removeCloseShop() {
    gameVar.removeChild(closeShop);
}

function shopButton() {
    let openShop = document.createElement("div");
    openShop.setAttribute("id", "openShop");
    openShop.setAttribute("class", "openShop");
    openShop.onclick = function shop() {
        gameVar.appendChild(shopMenu);
        gameVar.appendChild(shopMenuBG);
        gameVar.appendChild(closeShop);
        showUpgrades();
        shopOpen = true;
    }
    openShop.innerHTML = "Open Shop"
    gameVar.appendChild(openShop)
}


function showUpgrades() {
    gameVar.appendChild(upgradeOne)
}

function hideUpgrades() {
    gameVar.removeChild(upgradeOne)
}






startGame();