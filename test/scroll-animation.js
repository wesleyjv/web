// JavaScript to trigger scroll animations
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    const scrollPosition = window.scrollY + window.innerHeight;
  
    elements.forEach(element => {
      if (scrollPosition > element.offsetTop + element.clientHeight / 2) {
        element.classList.add('visible');
      }
    });
  });
  