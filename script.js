let x = 50;
let i = 0;
let j = 0;
let k = 0;
let positionX = x + "%";
let laserPosition = 50;
let laserPosition2 = 50;
let positionY = 75;
let enemyStart = 10;
let enemyX = 10;
let enemyCurrentPos1 = 0;
let enemyCurrentPos2 = 0;
let shopOpen = false;

let points = 0;

let shot1 = 1;

let u1Cost = 25;

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
    upgradeOne.innerHTML = "^^"
    upgradeOne.onclick = function useUpgradeOne() {
        if(points >= u1Cost) {
            points = points - u1Cost;
            u1Desc.innerHTML = "Reduces cooldown";
            u1Cost = Math.floor(u1Cost ** 1.25);
            u1Price.innerHTML = u1Cost;
            document.getElementById("score").innerHTML = "Score: " + points;
            u1Count = u1Count + 1;
            u1Activate();
        }
    }

let u1Count = 0;
let u1Chance = 0;
let u1Active = false


let u1Price = document.createElement("div");
u1Price.setAttribute("id", "u1Price");
u1Price.setAttribute("class", "u1Price");
u1Price.innerHTML = u1Cost;

let u1Desc = document.createElement("div");
u1Desc.setAttribute("id", "u1Desc");
u1Desc.setAttribute("class", "u1Desc");

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
        if(u1Active == true) {
            let laser = document.createElement("a");
            laser.setAttribute("id", "laser");
            laser.classList.add("laser");
            positionY = 75;
            laserPosition = x;
            laser.style.left = laserPosition - 1 + "%";
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

            let laser2 = document.createElement("a");
            laser2.setAttribute("id", "laser");
            laser2.classList.add("laser");
            positionY = 75;
            laserPosition2 = x;
            laser2.style.left = laserPosition2 + 1 + "%";
            laser2.style.top = positionY + "%"
            laserHolder.appendChild(laser2);
            let laser2Pos1 = laser2.getBoundingClientRect().left;
            let laser2Pos2 = laser2.getBoundingClientRect().right;
            laserMove2();
            setTimeout(() => {
                laser2.classList.remove("laser");
                laserHolder.removeChild(laser2);
            }, 400);
            function laserMove2() {
                let l2 = 0
                setTimeout(() => {
                    if(y < 18) {
                        if (laser2Pos1 >= enemyCurrentPos1) {
                            if (laser2Pos2 <= enemyCurrentPos2) {
                                laserHolder.removeChild(laser2);
                                successfulHit();
                            }
                        }
                    } 
                            laser2.style.top = y + "%"
                            l2++
                            if (l2 < 50) {
                                laserMove2();
                        }
                }, 10);
            }
        } else {
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
        u1Desc.innerHTML = "Double Shot"
        gameVar.appendChild(shopMenuBG);
        gameVar.appendChild(closeShop);
        showUpgrades();
        shopOpen = true;
    }
    openShop.innerHTML = "Open Shop";
    gameVar.appendChild(openShop);
}


function showUpgrades() {
    gameVar.appendChild(upgradeOne);
    gameVar.appendChild(u1Price);
    gameVar.appendChild(u1Desc);
}

function hideUpgrades() {
    gameVar.removeChild(upgradeOne);
    gameVar.removeChild(u1Price);
    gameVar.removeChild(u1Desc);
}

function u1Activate() {
    setTimeout(() => {
        if (u1Count >= 1) {
            let p = 0
            u1Chance = 0.1 * u1Count;
            if (Math.random() <= u1Chance) {
                u1Ability();
            }
        
        }
        u1Activate()
    }, 1000)
}

function u1Ability() {
    u1Active = true
    setTimeout(() => {
        u1Active = false
    }, 5000)
}


startGame();