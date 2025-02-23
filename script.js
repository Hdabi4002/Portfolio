// Parallax Scrolling Effect
window.addEventListener('scroll', function() {
    let parallaxSections = document.querySelectorAll('.parallax');
    
    parallaxSections.forEach(section => {
      let speed = 0.5;
      let offset = window.pageYOffset * speed;
      section.style.backgroundPosition = `center ${offset}px`;
    });
  });