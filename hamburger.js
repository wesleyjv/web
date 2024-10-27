const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the navigation links when hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});
