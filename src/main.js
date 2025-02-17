import './style.css'
import javascriptLogo from './javascript.svg'

function animateNumbers() {
  const counters = document.querySelectorAll('.number');
  const speed = 50; // Adjust speed for smoother counting

  counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || ''; // Get "+" or any suffix
      let count = 0;

      const updateCount = () => {
          const increment = Math.ceil(target / speed);

          if (count < target) {
              count += increment;
              counter.innerText = count;
              setTimeout(updateCount, 20);
          } else {
              counter.innerText = target + suffix; // Add "+" once final value is reached
          }
      };

      updateCount();
  });
}

// Trigger animation when section is in viewport
const statsSection = document.querySelector('.stats-section');
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
      animateNumbers();
      observer.disconnect(); // Runs once
  }
}, { threshold: 0.5 });

observer.observe(statsSection);


