const cursor = document.getElementById('cursor');

window.addEventListener('mousemove', function(event) {
    cursor.style.top = event.pageY + 'px';
    cursor.style.left = event.pageX + 'px';
})