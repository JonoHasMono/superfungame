let soundHolder = document.createElement("audio");
soundHolder.setAttribute("id", "audio");
document.body.appendChild(soundHolder);

let x = 50;
let i = 0;
let j = 0;
let k = 0;
let positionX = x + "%";
let laserPosition = 50;
let laserPosition2 = 50;
let positionY = 75;
let enemyStart = 10;
let enemyCurrentPos1 = 0;
let enemyCurrentPos2 = 0;
let shopOpen = false;
let mouseIsDown = false;
let firerate = 150;
let enemyX = 0;

let points = 0;

let shot1 = 1;
let shot2 = 3;
let shot3 = 2

let u1Cost = 25;
let u2Cost = 35;
let u3Cost = 80;
let u4Cost = 100;
let u5Cost = 250;

let powerup1 = "Double Shot";
let powerup2 = "Rapidfire";
let powerup3 = "Wide Shot";
let powerup4 = "Money Bonus"; //Non-displayable
let powerup5 = "Rainbeam";


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

 let upgradeThree = document.createElement("div");
    upgradeThree.setAttribute("id", "upThree");
    upgradeThree.setAttribute("class", "upThree");
    upgradeThree.innerHTML = "/  \\"
    upgradeThree.onclick = function useUpgradeThree() {
        if(points >= u3Cost) {
            points = points - u3Cost;
            u3Cost = 35 + (Math.floor(u3Cost * 3));
            u3Price.innerHTML = commas(u3Cost);
            document.getElementById("score").innerHTML = "Score: " + commas(points);
            commas(score);
            u3Count = u3Count + 1;
            u3Chance = 0.05 * u3Count;
            u3Activate();
            if(u3Count == 10) {
                u3Cost = Infinity;
                document.getElementById("u3Price").innerHTML = "MAX"
            }
        }
    }

let upgradeFour = document.createElement("div");
    upgradeFour.setAttribute("id", "upFour");
    upgradeFour.setAttribute("class", "upFour");
    upgradeFour.innerHTML = "$"
    upgradeFour.onclick = function useUpgradeFour() {
        if(points >= u4Cost) {
            points = points - u4Cost;
            u4Cost = 50 + (Math.floor(u4Cost * 3));
            u4Price.innerHTML = commas(u4Cost);
            document.getElementById("score").innerHTML = "Score: " + commas(points);
            commas(score);
            u4Active = true;
            u4Count = u4Count + 1;
            u4Activate();
            if(u4Count == 5) {
                u4Cost = Infinity;
                document.getElementById("u4Price").innerHTML = "MAX"
            }
        }
    }

let upgradeFive = document.createElement("div");
    upgradeFive.setAttribute("id", "upFive");
    upgradeFive.setAttribute("class", "upFive");
    upgradeFive.innerHTML = "O.o"
    upgradeFive.onclick = function useUpgradeFive() {
        if(points >= u5Cost) {
            points = points - u5Cost;
            u5Cost = 250 + (Math.floor(u5Cost * 3));
            u5Price.innerHTML = commas(u5Cost);
            document.getElementById("score").innerHTML = "Score: " + commas(points);
            commas(score);
            u5Count = u3Count + 1;
            u5Chance = 0.05 * u5Count;
            u5Activate();
            if(u5Count == 10) {
                u5Cost = Infinity;
                document.getElementById("u5Price").innerHTML = "MAX"
            }
        }
    }


let u1Count = 0;
let u1Chance = 0;
let u1Active = false

let u2Count = 0;
let u2Chance = 0;
let u2Active = false

let u3Count = 0;
let u3Chance = 0;
let u3Active = false

let u4Count = 0;
let u4Active = false
let u4Bonus = 1;

let u5Count = 0;
let u5Chance = 0;
let u5Active = false

let u1Price = document.createElement("div");
u1Price.setAttribute("id", "u1Price");
u1Price.setAttribute("class", "u1Price");
u1Price.innerHTML = u1Cost;

let u2Price = document.createElement("div");
u2Price.setAttribute("id", "u2Price");
u2Price.setAttribute("class", "u2Price");
u2Price.innerHTML = u2Cost;

let u3Price = document.createElement("div");
u3Price.setAttribute("id", "u3Price");
u3Price.setAttribute("class", "u3Price");
u3Price.innerHTML = u3Cost;

let u4Price = document.createElement("div");
u4Price.setAttribute("id", "u4Price");
u4Price.setAttribute("class", "u4Price");
u4Price.innerHTML = u4Cost;

let u5Price = document.createElement("div");
u5Price.setAttribute("id", "u5Price");
u5Price.setAttribute("class", "u5Price");
u5Price.innerHTML = u5Cost;


let u1Desc = document.createElement("div");
u1Desc.setAttribute("id", "u1Desc");
u1Desc.setAttribute("class", "u1Desc");

let u2Desc = document.createElement("div");
u2Desc.setAttribute("id", "u2Desc");
u2Desc.setAttribute("class", "u2Desc");

let u3Desc = document.createElement("div");
u3Desc.setAttribute("id", "u3Desc");
u3Desc.setAttribute("class", "u3Desc");

let u4Desc = document.createElement("div");
u4Desc.setAttribute("id", "u4Desc");
u4Desc.setAttribute("class", "u4Desc");

let u5Desc = document.createElement("div");
u5Desc.setAttribute("id", "u5Desc");
u5Desc.setAttribute("class", "u5Desc");


function starLoop() {
    let star = document.createElement("a");
    let starY = -10
    star.setAttribute("id", "star");
    star.setAttribute("class", "star");
    setTimeout(() => {
    star.style.left = (Math.random() * 2500) + "px";
    star.style.top = starY + "%";
    let starSpeed = 1;
    starMove();
    function starMove() {
        setTimeout(() => {
            starY = starY + (1 * starSpeed);
            starSpeed = starSpeed + 1;
            star.style.top = starY + "%"
            star.style.paddingTop = 5 * (starSpeed * 3) + "px";
            if (starY <= 100) {
                starMove();
            } else {
                gameVar.removeChild(star);
            }
        }, 20);
    }
    gameVar.appendChild(star);
    starLoop();
    }, 50)
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

function enemyLoop() {

    setTimeout(() => {
        enemyX = (25 + (Math.floor(Math.random() * 2000)))
        createEnemy();
    }, 1000)
}

function createEnemy() {
    let enemy = document.createElement("div");
    enemy.setAttribute("id", "enemy");
    enemy.classList.add("enemy");
    enemy.style.left = enemyX + "px";
    enemy.setAttribute("draggable", "false");
    let enemyStart = 0;
    enemy.style.top = 10 + "%"

    let enemyVis = document.createElement("img");
    enemyVis.setAttribute("src", "images/enemy.jpg");
    enemyVis.classList.add("enemyVis");

    enemies.appendChild(enemy);
    enemy.appendChild(enemyVis);
    trackPosition();
}

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

function trackPosition() {
    m = 0
    setTimeout(() => {
        m++
        enemyCurrentPos1 = (enemy.getBoundingClientRect().left) - 50;
        enemyCurrentPos2 = (enemy.getBoundingClientRect().right) + 50;
        enemyCurrentPos3 = (enemy.getBoundingClientRect().bottom);
        if(m < Infinity) {
            trackPosition();
        }
    }, 10);
}

function laserEyes() {
    
    if(shopOpen == false) {
        if(u3Active == true) {
            let laserWide = document.createElement("a");
            laserWide.setAttribute("id", "laserWide");
            laserWide.classList.add("laserWide");
            positionY = 75;
            laserWide.style.left = laserPosition + "px";
            laserWide.style.top = positionY + "%";
            laserHolder.appendChild(laserWide);
            let laserWidePos1 = laserWide.getBoundingClientRect().left;
            let laserWidePos2 = laserWide.getBoundingClientRect().right;
            laserWideMove();
            let y = 800
            function laserWideMove() {
                let l = 0
                setTimeout(() => {
                    if(y < enemyCurrentPos3) {
                        if (laserWidePos1 >= enemyCurrentPos1) {
                            if (laserWidePos2 <= enemyCurrentPos2) {
                                laserHolder.removeChild(laserWide);
                                successfulHitWide();
                                y = 75
                            }
                        }
                    } 
                    y = y - 30;
                            laserWide.style.top = y + "px"
                            l++
                            if (l < 50) {
                                laserWideMove();
                        }
                }, 10);
            }
            setTimeout(() => {
                laserWide.classList.remove("laserWide");
                laserHolder.removeChild(laserWide);
                y = 75
            }, 500);
        }
        if(u1Active == true) {
            let laser = document.createElement("a");
            laser.setAttribute("id", "laser");
            laser.classList.add("laser");
            positionY = 75;
            laser.style.left = laserPosition - 15 + "px";
            laser.style.top = "800px"
            laserHolder.appendChild(laser);
            let laserPos1 = laser.getBoundingClientRect().left;
            let laserPos2 = laser.getBoundingClientRect().right;
            laserMove();
        let y = 800
        function laserMove() {
            let l = 0
            setTimeout(() => {
                if(y < enemyCurrentPos3) {
                    if (laserPos1 >= enemyCurrentPos1) {
                        if (laserPos2 <= enemyCurrentPos2) {
                            laserHolder.removeChild(laser);
                            successfulHit();
                            y = 75
                        }
                    }
                    y = y - 40;
                        laser.style.top = y + "px"
                        l++
                        if (l < 50) {
                            laserMove();
                    }
                } else { 
                    y = y - 40;
                        laser.style.top = y + "px"
                        l++
                        if (l < 50) {
                            laserMove();
                    }
            };
        }, 10);
    }
            
            setTimeout(() => {
                laser.classList.remove("laser");
                laserHolder.removeChild(laser);
                y = 75
            }, 500);

            let laser2 = document.createElement("a");
            laser2.setAttribute("id", "laser");
            laser2.classList.add("laser");
            positionY = 75;
            laserPosition2 = x;
            laser2.style.left = laserPosition2 + 15 + "px";
            laser2.style.top = "800px"
            laserHolder.appendChild(laser2);
            let laser2Pos1 = laser2.getBoundingClientRect().left;
            let laser2Pos2 = laser2.getBoundingClientRect().right;
            laserMove2();
            let y2 = 800
            function laserMove2() {
                let l2 = 0
                setTimeout(() => {
                    if(y2 < enemyCurrentPos3) {
                        if (laser2Pos1 >= enemyCurrentPos1) {
                            if (laser2Pos2 <= enemyCurrentPos2) {
                                laserHolder.removeChild(laser2);
                                successfulHit();
                                y2 = 75
                            }
                        }
                        y2 = y2 - 40;
                            laser2.style.top = y2 + "px"
                            l2++
                            if (l2 < 50) {
                                laserMove2();
                        }
                    } else { 
                        y2 = y2 - 40;
                            laser2.style.top = y2 + "px"
                            l2++
                            if (l2 < 50) {
                                laserMove2();
                        }
                };
            }, 10);
        }
        setTimeout(() => {
            laser2.classList.remove("laser");
            laserHolder.removeChild(laser2);
            y2 = 75
        }, 500);
} else {
        let laser = document.createElement("a");
        laser.setAttribute("id", "laser");
        laser.classList.add("laser");
        positionY = 75;
        let y = 800
        laser.style.left = x + "px";
        laser.style.top = y + "px"
        laserHolder.appendChild(laser);
        let laserPos1 = laser.getBoundingClientRect().left;
        let laserPos2 = laser.getBoundingClientRect().right;
        laserMove();
        function laserMove() {
            let l = 0
            setTimeout(() => {
                if(y < enemyCurrentPos3) {
                    if (laserPos1 >= enemyCurrentPos1) {
                        if (laserPos2 <= enemyCurrentPos2) {
                            laserHolder.removeChild(laser);
                            successfulHit();
                        }
                    }
                    y = y - 40;
                        laser.style.top = y + "px"
                        l++
                        if (l < 50) {
                            laserMove();
                    }
                } else { 
                    y = y - 40;
                        laser.style.top = y + "px"
                        l++
                        if (l < 50) {
                            laserMove();
                    }
            };
        }, 10);
    }

        setTimeout(() => {
            laser.classList.remove("laser");
            laserHolder.removeChild(laser);
            y = 75
        }, 500);
    }
}
    }


function successfulHit() {
    points = points + (shot1 * u4Bonus);
    function showDamage() {
        let damageY = (enemy.getBoundingClientRect().top) + (Math.floor(Math.random() * 100));
        let damage = document.createElement("div");
        damage.setAttribute("id", "damage");
        damage.setAttribute("class", "damage");
        damage.style.opacity = 1;
        damage.innerHTML = "-" + shot1;
        damage.style.left = ((enemyCurrentPos1 + 50) + (Math.floor(Math.random() * 100))) + "px";
        damage.style.top = damageY + "px"
        gameVar.appendChild(damage);
        function damageFade() {
            setTimeout(() => {
                if(damage.style.opacity > 0) {
                    damage.style.opacity = damage.style.opacity - 0.01
                    damageY = damageY - 2
                    damage.style.top = damageY + "px"
                    damageFade();
                }
            }, 10)
        }
        setTimeout(() => {
            damageFade();
        }, 50)
        setTimeout(() => {
            gameVar.removeChild(damage);
        }, 1000)
    }
    showDamage();
    document.getElementById("score").innerHTML = "Score: " + commas(points);
}

function successfulHitWide() {
    points = points + (shot2 * u4Bonus);
    function showDamage() {
        let damageY = (enemy.getBoundingClientRect().top) + (Math.floor(Math.random() * 100));
        let damage = document.createElement("div");
        damage.setAttribute("id", "damage");
        damage.setAttribute("class", "damage");
        damage.style.opacity = 1;
        damage.innerHTML = "-" + shot2;
        damage.style.left = ((enemyCurrentPos1 + 50) + (Math.floor(Math.random() * 100))) + "px";
        damage.style.top = damageY + "px"
        gameVar.appendChild(damage);
        function damageFade() {
            setTimeout(() => {
                if(damage.style.opacity > 0) {
                    damage.style.opacity = damage.style.opacity - 0.01
                    damageY = damageY - 2
                    damage.style.top = damageY + "px"
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
        u3Desc.innerHTML = "Wide Shot"
        u4Desc.innerHTML = "Increase money with each powerup";
        u5Desc.innerHTML = "Rainbeam";
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
    gameVar.appendChild(upgradeThree);
    gameVar.appendChild(u3Price);
    gameVar.appendChild(u3Desc);
    gameVar.appendChild(upgradeFour);
    gameVar.appendChild(u4Price);
    gameVar.appendChild(u4Desc);
    gameVar.appendChild(upgradeFive);
    gameVar.appendChild(u5Price);
    gameVar.appendChild(u5Desc);
}

function hideUpgrades() {
    gameVar.removeChild(upgradeOne);
    gameVar.removeChild(u1Price);
    gameVar.removeChild(u1Desc);
    gameVar.removeChild(upgradeTwo);
    gameVar.removeChild(u2Price);
    gameVar.removeChild(u2Desc);
    gameVar.removeChild(upgradeThree);
    gameVar.removeChild(u3Price);
    gameVar.removeChild(u3Desc);
    gameVar.removeChild(upgradeFour);
    gameVar.removeChild(u4Price);
    gameVar.removeChild(u4Desc);
    gameVar.removeChild(upgradeFive);
    gameVar.removeChild(u5Price);
    gameVar.removeChild(u5Desc);
}

function u1Activate() {
    setTimeout(() => {
        if (u1Count >= 1) {
            let p = 0
            if (Math.random() <= u1Chance) {
                u1Ability();
                u4Ability();
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
                u4Ability();
            } else {
                u2Activate()
            }
        
        }
    }, 1000)
}

function u3Activate() {
    setTimeout(() => {
        if (u3Count >= 1) {
            let p = 0
            if (Math.random() <= u3Chance) {
                u3Ability();
                u4Ability();
            } else {
                u3Activate()
            }
        
        }
    }, 1000)
}

function u5Activate() {
    setTimeout(() => {
        if (u5Count >= 1) {
            let p = 0
            if (Math.random() <= u5Chance) {
                u5Ability();
                u5Ability();
            } else {
                u5Activate()
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
    firerate = 75
    powerupUsed(powerup2);
    setTimeout(() => {
        firerate = 150
        u2Activate()
    }, 5000)
}

function u3Ability() {
    u3Active = true
    powerupUsed(powerup3);
    setTimeout(() => {
        u3Active = false
        u3Activate()
    }, 5000)
}

function u3Ability() {
    u5Active = true
    powerupUsed(powerup5);
    setTimeout(() => {
        u5Active = false
        u5Activate()
    }, 5000)
}

function u4Ability() {
    if(u4Active == true) {
        u4Bonus = u4Count + 1;
        setTimeout(() => {
            u4Bonus = 1;
        }, 5000)
    }
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

function startGame() {
    createCharacter();
    createEnemy();
    setScore();
    shopButton();
}

startGame();