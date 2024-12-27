const audioPlayer = document.getElementById('audioPlayer');
    const toggleButton = document.getElementById('toggleButton');
    document.getElementById('toggleButton').addEventListener('click', function() {
        createTriangleflakes(137);
    });

    function toggleMusic() {
      if (audioPlayer.paused) {
        audioPlayer.play();
        toggleButton.textContent = "Pause Music";
        toggleButton.classList.remove('btn-success');
        toggleButton.classList.add('btn-danger');
      } else {
        audioPlayer.pause();
        toggleButton.textContent = "Play Music";
        toggleButton.classList.remove('btn-danger');
        toggleButton.classList.add('btn-success');
      }
    }

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

const glowingText = document.getElementById('glowing-text');
const colors = ['#ff00b3', '#00ffcc', '#ffcc00', '#ff0066', '#cc00ff'];
const text = glowingText.innerText;
glowingText.innerHTML = '';
text.split('').forEach(letter => {
  const span = document.createElement('span');
  span.innerText = letter;
  glowingText.appendChild(span);
});

const spans = glowingText.querySelectorAll('span');
let currentColorIndex = 0;

function changeLetterColors() {
  spans.forEach(span => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    span.style.color = randomColor;
  });
}
setInterval(changeLetterColors, 500);

const button = document.getElementById('triangle-button');
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        shapes: ['square', 'circle'],
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffcc00'],
    });
}
button.addEventListener('click', triggerConfetti);

document.getElementById('resume-button').onclick = function() {
  window.open('./src/assets/docs/Prabhu Teja Pamula.pdf', '_blank');
};