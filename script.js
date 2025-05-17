 // Toggle "Read More" / "View Less" content
  document.querySelectorAll('.toggle-more').forEach(link => {
    link.addEventListener('click', () => {
      const extraContent = link.previousElementSibling;
      if (!extraContent) return;
      
      if (extraContent.style.display === 'block') {
        extraContent.style.display = 'none';
        link.textContent = '+ Read More';
      } else {
        extraContent.style.display = 'block';
        link.textContent = '- View Less';
      }
    });
  });

  //down slider 

   const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  };

  document.getElementById('prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Show the first slide initially
  showSlide(currentSlide);

  /*footer */

   document.getElementById("languageSelect").addEventListener("change", function () {
      alert("Language changed to: " + this.options[this.selectedIndex].text);
      
    });