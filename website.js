// Smooth scroll for header button
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#games').scrollIntoView({ behavior: 'smooth' });
});

// Carousel arrows
const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

leftArrow.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

// Starry background
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5
  });
}

function animateStars() {
  ctx.clearRect(0, 0, width, height);
  for (let star of stars) {
    star.y -= star.speed;
    if (star.y < 0) star.y = height;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
  }
  requestAnimationFrame(animateStars);
}

animateStars();
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
