const cursor = document.getElementById('cursor');

/**
 * This function makes the boxing glove move with the cursor
 */
window.addEventListener('mousemove', function(event) {
    cursor.style.top = event.pageY + 'px';
    cursor.style.left = event.pageX + 'px';
})

/**
 * This function makes the glove rotate on mousedown
 * to simulate giving a punch
 */
window.addEventListener('mousedown', function() {
    cursor.style.transform = 'translate(-50%, -20%) rotate(70deg)';
})

/**
 * This function returns the boxing glove to its
 * rest state
 */
 window.addEventListener('mouseup', function() {
    cursor.style.transform = 'translate(-50%, -20%)';
})

