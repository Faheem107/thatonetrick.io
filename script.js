// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// After the typewriter animation ends, fade in the subtitle & button
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const subtitle = document.querySelector('.subheadline');
  const btn = document.querySelector('.scroll-btn');

  // typing animation is 3s; wait a bit extra
  setTimeout(() => {
    subtitle.style.opacity = '1';
    subtitle.style.transform = 'translateY(0)';
    btn.style.opacity = '1';
    btn.style.transform = 'translateY(0)';
  }, 3500);
});
