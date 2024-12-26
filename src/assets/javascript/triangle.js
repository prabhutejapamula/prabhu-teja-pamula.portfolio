document.getElementById('triangle-button').addEventListener('click', function() {
    createTriangleflakes(137);
});

function createTriangleflakes(count) {
    for (let i = 0; i < count; i++) {
        const triangle = document.createElement('div');
        triangle.className = 'triangle';
        triangle.style.left = Math.random() * window.innerWidth + 'px';
        const size = Math.random() * (15 - 5) + 5;
        triangle.style.width = size + 'px';
        triangle.style.height = size + 'px';
        const duration = Math.random() * (5 - 2) + 2;
        triangle.style.animationDuration = duration + 's';
        triangle.style.opacity = Math.random();
        triangle.style.animationName = 'fall';
        document.body.appendChild(triangle);
        setTimeout(() => {
            triangle.remove();
        }, duration * 1000);
    }
}
