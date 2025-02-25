// Number Animation
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
  document.addEventListener('DOMContentLoaded', function () {
    const statsSection = document.querySelector('.stats-section');
  
    if (statsSection) {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          animateNumbers();
          observer.disconnect(); // Runs once
        }
      }, { threshold: 0.5 });
  
      observer.observe(statsSection);
    } else {
      console.error('Stats section not found');
    }
  });
  
  // Carousel Initialization
  $(document).ready(function () {
    $('.carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $('.works-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  // Modal Handling
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll(".openModal").forEach(button => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById(this.dataset.modal).style.display = "flex";
      });
    });
  
    document.querySelectorAll(".modal-close").forEach(button => {
      button.addEventListener("click", function () {
        this.closest(".modal").style.display = "none";
      });
    });
  
    document.getElementById("agreeCheckbox")?.addEventListener("change", function () {
      document.getElementById("submitBtn").disabled = !this.checked;
    });
  });
  
  // Hamburger Menu
  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.navbar__hamburger');
    const nav = document.querySelector('.navbar__nav');
  
    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    }
  });
  
  // Timeline Animation
  document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    if (timelineItems.length > 0) {
      const observers = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.5 });
  
      timelineItems.forEach((item) => {
        observers.observe(item);
      });
    }
  });
  
  // Tab Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.training__tab');
    const categories = document.querySelectorAll('.training__category');

    if (tabs.length === 0) {
      console.error('No training tabs found.');
      return;
    }

    function clearActive() {
      tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      });
      categories.forEach(cat => cat.classList.remove('active'));
    }

    function setActiveTab(tab) {
      clearActive();
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const targetId = tab.getAttribute('data-target');
      const targetCategory = document.getElementById(targetId);
      if (targetCategory) {
        targetCategory.classList.add('active');
        console.log('Activated category:', targetId);
      } else {
        console.error('No category found for', targetId);
      }
    }

    // Set the first tab as active by default
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        setActiveTab(this);
      });
    });
    // Activate the first tab if available
    setActiveTab(tabs[0]);
  });