// Page Loader
window.addEventListener('load', function() {
  const loader = document.getElementById('pageLoader');
  if (loader) {
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 500);
  }
});

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

  // Scroll to Top Button
  document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.add('show');
        } else {
          scrollToTopBtn.classList.remove('show');
        }
      });

      scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });

  // Smooth Scroll for Anchor Links
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  });

  // Sticky Navbar on Scroll
  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  });

  // Scroll Animations for Elements
  document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.services__card');
    serviceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  });

  // Project Filter Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter__btn');
    const projectCards = document.querySelectorAll('.project__card');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter projects with smooth animation
        projectCards.forEach((card, index) => {
          const category = card.getAttribute('data-category');
          
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, index * 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });

    // Initialize project cards with animation
    projectCards.forEach(card => {
      card.style.transition = 'all 0.4s ease';
    });
  });