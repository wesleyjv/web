// Show the popup on page load
window.addEventListener('load', function() {
    document.getElementById('cookie-popup').classList.add('show');
});

// Function to hide the popup when cookies are accepted
function acceptCookies() {
    document.getElementById('cookie-popup').classList.remove('show');
    // Optionally, add code to remember the user’s choice, e.g., using localStorage
}

// Function to hide the popup when cookies are declined
function declineCookies() {
    document.getElementById('cookie-popup').classList.remove('show');
    // Optionally, add code to remember the user’s choice or handle declined cookies
}
