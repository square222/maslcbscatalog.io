// Обновите ваш script.js

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
    photo.classList.toggle('active', i === index);
  });
}

// Если фото больше одного И кнопки существуют — включаем карусель
if (photos.length > 1 && prevButton && nextButton) {

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
    showPhoto(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1 : 0;
    showPhoto(currentIndex);
  });

} else {
  // Если фото одно — показываем его и ничего не ломаем
  if (photos[0]) {
    photos[0].classList.add('active');
  }
}


// Эффект летних частиц
const particlesContainer = document.querySelector('.particles');
const particleTypes = ['leaf', 'bubble', 'petal'];

function createParticle() {
  const particle = document.createElement('div');
  const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
  
  particle.classList.add('particle', type);
  
  // Начальная позиция
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.bottom = `-50px`;
  
  // Размер
  const size = Math.random() * 20 + 10;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Анимация
  const duration = Math.random() * 15 + 10;
  particle.style.animationDuration = `${duration}s`;
  
  // Случайное смещение по X
  const xMovement = Math.random() * 200 - 100;
  particle.style.setProperty('--x-movement', `${xMovement}px`);
  
  // Добавляем частицу
  particlesContainer.appendChild(particle);
  
  // Удаляем частицу после завершения анимации
  setTimeout(() => {
    particle.remove();
  }, duration * 1000);
}

// Создаем несколько частиц сразу
for (let i = 0; i < 20; i++) {
  setTimeout(createParticle, Math.random() * 5000);
}

// Продолжаем создавать частицы
setInterval(createParticle, 500);

// Добавляем CSS для плавающего движения
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% {
      transform: translateX(0) translateY(0) rotate(0deg);
    }
    50% {
      transform: translateX(var(--x-movement, 0)) translateY(-50vh) rotate(180deg);
    }
    100% {
      transform: translateX(0) translateY(-100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);