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
const colors = ['#ff00b3', '#00ffcc', '#ffcc00', '#ff0066', '#cc00ff']; // Array of colors

// Split the text into individual characters and wrap each in a <span> tag
const text = glowingText.innerText;
glowingText.innerHTML = ''; // Clear the original text

text.split('').forEach(letter => {
  const span = document.createElement('span');
  span.innerText = letter;
  glowingText.appendChild(span);
});

const spans = glowingText.querySelectorAll('span');
let currentColorIndex = 0;

function changeLetterColors() {
  spans.forEach(span => {
    // Assign each letter a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    span.style.color = randomColor;
  });
}

// Change colors every 500 milliseconds
setInterval(changeLetterColors, 500);
