const cursor = document.getElementById('cursor');

/**
 * This function makes the boxing glove move with the cursor
 */
window.addEventListener('mousemove', function (event) {
    cursor.style.top = event.pageY + 'px';
    cursor.style.left = event.pageX + 'px';
})

/**
 * This function makes the glove rotate on mousedown
 * to simulate giving a punch
 */
window.addEventListener('mousedown', function () {
    cursor.style.transform = 'translate(-50%, -20%) rotate(0deg)';
})

/**
 * This function returns the boxing glove to its
 * rest state
 */
window.addEventListener('mouseup', function () {
    cursor.style.transform = 'translate(-50%, -20%) rotate(90deg)';
})

/**
 * This starts the game
 */
function letsFight() {

    

/**
 * This function makes the character tiles pop up
 * from random holes
 */
let tiles = document.getElementsByClassName('tile');
console.log(tiles.length);
console.log(tiles);
let i = Math.floor(Math.random() * tiles.length);
console.log(i);
let popup = tiles[i];
console.log(popup.innerHTML);
popup.classList.remove('hide');

/**
 * This function defines what should happen when the cursor
 * is clicked on a character tile when it popsup
 */


/**
 * This will create the random punch sound to use on whacking
 * the character
 */
popup.addEventListener('click', function() {
    let punchSound1 = new Audio('assets/sounds/mixkit-soft-quick-punch-2151.wav');
    let punchSound2 = new Audio('assets/sounds/mixkit-weak-hit-impact-2148.wav');
    punchSound2.play();
})

/**
 * Removes the character tile from the hole
 * after 3000 milliseconds
 */
 let timer;
 timer = setTimeout(function () {
     popup.classList.add('hide');
     letsFight();
 }, 3000)

/**
 * This function increments the score by 10 for every successful
 * character whacked
 */
let score = document.getElementsByTagName('span')[0];
let points = Number(0);
console.log(score.textContent);
popup.addEventListener('click', function () {
    points += Number(10);
    score.textContent = points;
    clearTimeout(timer)
})



/**
 * This changes the character tile to an injured version
 * from the original SF2 continue screen when you whack them
 */
popup.addEventListener('click', function () {
    ryu = document.getElementById('ryuPic');
    ken = document.getElementById('kenPic');
    chunli = document.getElementById('chunliPic');
    guile = document.getElementById('guilePic');
    blanka = document.getElementById('blankaPic');
    zangief = document.getElementById('zangiefPic');
    dhalsim = document.getElementById('dhalsimPic');
    honda = document.getElementById('hondaPic');
    balrog = document.getElementById('balrogPic');
    vega = document.getElementById('vegaPic');
    sagat = document.getElementById('sagatPic');
    bison = document.getElementById('bisonPic');

    ryu.src = "/assets/images/injuredFighters/ryuInjured.png"
    ken.src = "/assets/images/injuredFighters/kenInjured.png"
    chunli.src = "/assets/images/injuredFighters/chunliInjured.png"
    guile.src = "/assets/images/injuredFighters/guileInjured.png"
    blanka.src = "/assets/images/injuredFighters/blankaInjured.png"
    zangief.src = "/assets/images/injuredFighters/zangiefInjured.png"
    dhalsim.src = "/assets/images/injuredFighters/dhalsimInjured.png"
    honda.src = "/assets/images/injuredFighters/hondaInjured.png"
    balrog.src = "/assets/images/injuredFighters/balrogInjured.png"
    vega.src = "/assets/images/injuredFighters/vegaInjured.png"
    sagat.src = "/assets/images/injuredFighters/sagatInjured.png"
    bison.src = "/assets/images/injuredFighters/bisonInjured.png"
})
}
letsFight();
