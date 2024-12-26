document.getElementById('snow-button').addEventListener('click', function() {
    createSnowflakes(100); // Create 100 snowflakes
});

function createSnowflakes(count) {
    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snow';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        const size = Math.random() * (15 - 5) + 5;
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        const duration = Math.random() * (5 - 2) + 2;
        snowflake.style.animationDuration = duration + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.animationName = 'fall';
        document.body.appendChild(snowflake);
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }
}
