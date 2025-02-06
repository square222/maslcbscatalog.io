// Анимация появления элементов с помощью GSAP
gsap.from(".photo-wrapper", {
  duration: 1.5,
  x: -100,
  opacity: 0,
  ease: "power3.out",
});

gsap.from(".text", {
  duration: 1.5,
  x: 100,
  opacity: 0,
  ease: "power3.out",
  delay: 0.5,
});

// Эффекты при скролле с помощью ScrollReveal
ScrollReveal().reveal('.photo-wrapper', { delay: 300 });
ScrollReveal().reveal('.text', { delay: 500 });

// Карусель для фото
const photos = document.querySelectorAll('.photo-carousel img');
const prevButton = document.querySelector('.arrow.left');
const nextButton = document.querySelector('.arrow.right');
let currentIndex = 0;

function showPhoto(index) {
  photos.forEach((photo, i) => {
    photo.classList.remove('active');
    if (i === index) {
      photo.classList.add('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
  showPhoto(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1 : 0;
  showPhoto(currentIndex);
});

// Эффект снега
const snowfallContainer = document.querySelector('.snowfall');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.opacity = Math.random();
  snowflake.style.width = `${Math.random() * 10 + 5}px`;
  snowflake.style.height = snowflake.style.width;
  snowfallContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createSnowflake, 100);