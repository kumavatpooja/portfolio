// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + window.innerHeight - 100;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      section.classList.add('visible');
    }
  });

  const triggerPos = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    const id = section.getAttribute('id');
    if (
      triggerPos >= section.offsetTop &&
      triggerPos < section.offsetTop + section.offsetHeight
    ) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
});

// Typewriter Effect
const phrases = [
  "MERN Stack Developer",
  "Full Stack Engineer",
  "API & Database Specialist",
  "Creative Problem Solver",
  "Creator of MoodSync"
];

let currentPhrase = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typing-text");

function typeLoop() {
  if (!typingText) return;

  const current = phrases[currentPhrase];
  if (isDeleting) {
    typingText.textContent = current.substring(0, charIndex--);
  } else {
    typingText.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeLoop, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typeLoop, 500);
  } else {
    setTimeout(typeLoop, isDeleting ? 50 : 100);
  }
}
typeLoop();

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Hamburger Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}
