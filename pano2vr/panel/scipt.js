// Анимация появления элементов с помощью GSAP
gsap.from(".photo", {
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
  ScrollReveal().reveal('.photo', { delay: 300 });
  ScrollReveal().reveal('.text', { delay: 500 });
  
  // Tilt.js для интерактивного наклона фото
  if ($('.photo').length) {
    $('.photo').tilt({
      scale: 1.1,
      glare: true,
      maxGlare: 0.5,
    });
  }