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



$(document).ready(function(){
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
});


document.querySelectorAll(".openModal").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById(this.dataset.modal).style.display = "flex";
    });
});
document.querySelectorAll(".modal-close").forEach(button => {
    button.addEventListener("click", function() {
        this.closest(".modal").style.display = "none";
    });
});
document.getElementById("agreeCheckbox").addEventListener("change", function() {
    document.getElementById("submitBtn").disabled = !this.checked;
});



$(document).ready(function(){
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



  const hamburger = document.querySelector('.navbar__hamburger');
  const nav = document.querySelector('.navbar__nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });


// Example: Add animation to timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

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