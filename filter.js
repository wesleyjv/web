function filterSubjects() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.getElementsByClassName('card');

    // Loop through all cards, and hide those that don't match the search query
    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].getElementsByClassName('card-title')[0].textContent.toLowerCase();
        if (title.indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

const reviews = document.querySelectorAll('.review_card');
let currentReview = 0;

// Function to show the review based on index
function showReview(index) {
    const reviewWidth = reviews[0].offsetWidth; // Get the width of a single review card
    const reviewCards = document.querySelector('.review_cards');
    
    // Use transform to shift the reviews horizontally
    reviewCards.style.transform = `translateX(${-index * reviewWidth}px)`;
}

// Event listeners for the navigation buttons
document.getElementById('next').addEventListener('click', () => {
    currentReview = (currentReview + 1) % reviews.length; // Loop to the start if at the end
    showReview(currentReview);
});

document.getElementById('prev').addEventListener('click', () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length; // Loop to the end if at the start
    showReview(currentReview);
});

// Initially show the first review
showReview(currentReview);

