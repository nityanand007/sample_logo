document.addEventListener('click', function(event) {
    var angle = 15;
    var content = document.querySelector('.content');
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    var offsetX = event.clientX - centerX;
    var offsetY = event.clientY - centerY;

    content.style.transformOrigin = `${offsetX}px ${offsetY}px`;
    content.style.transform = `rotate(${angle}deg)`;
});
