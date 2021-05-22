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
let mouseIsDown = false;
let firerate = 150;

let points = 0;

let shot1 = 1;

let u1Cost = 25;

let u2Cost = 35;

let powerup1 = "Double Shot";
let powerup2 = "Rapidfire";


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
charVis.setAttribute("draggable", "false");

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
            u1Cost = 25 + (Math.floor(u1Cost * 3));
            u1Price.innerHTML = commas(u1Cost);
            document.getElementById("score").innerHTML = "Score: " + commas(points);
            commas(score);
            u1Count = u1Count + 1;
            u1Chance = 0.05 * u1Count;
            u1Activate();
            if(u1Count == 10) {
                u1Cost = Infinity;
                document.getElementById("u1Price").innerHTML = "MAX"
            }
        }
    }

let upgradeTwo = document.createElement("div");
    upgradeTwo.setAttribute("id", "upTwo");
    upgradeTwo.setAttribute("class", "upTwo");
    upgradeTwo.innerHTML = "---"
    upgradeTwo.onclick = function useUpgradeTwo() {
        if(points >= u2Cost) {
            points = points - u2Cost;
            u2Cost = 35 + (Math.floor(u2Cost * 3));
            u2Price.innerHTML = commas(u2Cost);
            document.getElementById("score").innerHTML = "Score: " + commas(points);
            commas(score);
            u2Count = u2Count + 1;
            u2Chance = 0.05 * u2Count;
            u2Activate();
            if(u2Count == 10) {
                u2Cost = Infinity;
                document.getElementById("u2Price").innerHTML = "MAX"
            }
        }
    }

let u1Count = 0;
let u1Chance = 0;
let u1Active = false

let u2Count = 0;
let u2Chance = 0;
let u2Active = false


let u1Price = document.createElement("div");
u1Price.setAttribute("id", "u1Price");
u1Price.setAttribute("class", "u1Price");
u1Price.innerHTML = u1Cost;

let u2Price = document.createElement("div");
u2Price.setAttribute("id", "u2Price");
u2Price.setAttribute("class", "u2Price");
u2Price.innerHTML = u2Cost;

let u1Desc = document.createElement("div");
u1Desc.setAttribute("id", "u1Desc");
u1Desc.setAttribute("class", "u1Desc");

let u2Desc = document.createElement("div");
u2Desc.setAttribute("id", "u2Desc");
u2Desc.setAttribute("class", "u2Desc");


function startGame() {
    createCharacter();
    createEnemy();
    setScore();
    shopButton();
    starLoop();
}

function starLoop() {
    let star = document.createElement("a");
    let starY = -10
    star.setAttribute("id", "star");
    star.setAttribute("class", "star");
    setTimeout(() => {
    star.style.left = (Math.random() * 2000) + 5 + "px";
    star.style.top = starY + "%";
    let starSpeed = 1;
    starMove();
    function starMove() {
        setTimeout(() => {
            starY = starY + (1 * starSpeed);
            starSpeed = starSpeed + 0.25;
            star.style.top = starY + "%"
            star.style.paddingTop = 5 * (starSpeed * 3) + "px";
            if (starY <= 100) {
                starMove();
            } else {
                gameVar.removeChild(star);
            }
        }, 10);
    }
    gameVar.appendChild(star);
    starLoop();
    }, 25)
}


function setScore() {
    document.getElementById("score").innerHTML = "Score: " + commas(points);
}

function commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

document.addEventListener('mousedown', shootLasers)
document.addEventListener('mouseup', stopLasers)

function shootLasers() {
    if (mouseIsDown == false) {
        mouseIsDown = true;
        laserLoop();
        laserEyes();
    }

}

function stopLasers() {
    if (mouseIsDown == true) {
        mouseIsDown = false;
    }
}

function laserLoop() {
    setTimeout(() => {
        if(mouseIsDown == true) {
            laserEyes();
            laserLoop();
        }
    }, firerate)
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
            laser.style.left = laserPosition - 15 + "px";
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
            }, 500);

            let laser2 = document.createElement("a");
            laser2.setAttribute("id", "laser");
            laser2.classList.add("laser");
            positionY = 75;
            laserPosition2 = x;
            laser2.style.left = laserPosition2 + 15 + "px";
            laser2.style.top = positionY + "%"
            laserHolder.appendChild(laser2);
            let laser2Pos1 = laser2.getBoundingClientRect().left;
            let laser2Pos2 = laser2.getBoundingClientRect().right;
            laserMove2();
            setTimeout(() => {
                laser2.classList.remove("laser");
                laserHolder.removeChild(laser2);
            }, 500);
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
        laser.style.left = x + "px";
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
        }, 500);
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
    document.getElementById("score").innerHTML = "Score: " + commas(points);
}

addEventListener("mousemove", function(e) {
    let mouseX = e.clientX
    character.style.left = mouseX + "px"
    x = mouseX;
    laserPosition = mouseX;
    positionX = mouseX;
})


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
        u2Desc.innerHTML = "Rapidfire"
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
    gameVar.appendChild(upgradeTwo);
    gameVar.appendChild(u2Price);
    gameVar.appendChild(u2Desc);
}

function hideUpgrades() {
    gameVar.removeChild(upgradeOne);
    gameVar.removeChild(u1Price);
    gameVar.removeChild(u1Desc);
    gameVar.removeChild(upgradeTwo);
    gameVar.removeChild(u2Price);
    gameVar.removeChild(u2Desc);
}

function u1Activate() {
    setTimeout(() => {
        if (u1Count >= 1) {
            let p = 0
            if (Math.random() <= u1Chance) {
                u1Ability();
            } else {
                u1Activate()
            }
        
        }
    }, 1000)
}

function u2Activate() {
    setTimeout(() => {
        if (u2Count >= 1) {
            let p = 0
            if (Math.random() <= u2Chance) {
                u2Ability();
            } else {
                u2Activate()
            }
        
        }
    }, 1000)
}

function u1Ability() {
    u1Active = true
    powerupUsed(powerup1);
    setTimeout(() => {
        u1Active = false
        u1Activate()
    }, 5000)
}

function u2Ability() {
    firerate = 10
    powerupUsed(powerup2);
    setTimeout(() => {
        firerate = 150
        u2Activate()
    }, 5000)
}

function powerupUsed(pow) {
    function showPowerup() {
        let powerup = document.createElement("div");
        powerup.setAttribute("id", "powerup");
        powerup.setAttribute("class", "powerup");
        powerup.style.top = "80%";
        powerup.style.opacity = 1;
        powerup.innerHTML = pow
        powerup.style.left = x + "px";
        gameVar.appendChild(powerup);
        function powerupFade() {
            setTimeout(() => {
                if(powerup.style.opacity > 0) {
                    powerup.style.opacity = powerup.style.opacity - 0.025
                    powerupFade();
                }
            }, 10)
        }
        setTimeout(() => {
            powerupFade();
        }, 250)
        setTimeout(() => {
            gameVar.removeChild(powerup);
        }, 1000)
    }
    showPowerup();
}

startGame();