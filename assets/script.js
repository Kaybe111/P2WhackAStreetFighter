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
    cursor.style.transform = 'translate(-50%, -20%) rotate(70deg)';
})

/**
 * This function returns the boxing glove to its
 * rest state
 */
window.addEventListener('mouseup', function () {
    cursor.style.transform = 'translate(-50%, -20%)';
})

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
popup.addEventListener('click', function() {
    alert('You whacked me')
})

/**
 * This function increments the score by 10 for every successful
 * character whacked
 */
let score = document.getElementsByTagName('span')[0];
let points = Number(0);
console.log(score.textContent);
popup.addEventListener('click', function(){
    points += Number(10);
    score.textContent = points;
})

let timer;
timer = setTimeout(function(){
    popup.classList.add('hide');
}, 1500)

