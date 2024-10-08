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