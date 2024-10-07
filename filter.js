function filterSubjects() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('searchResults');
    const listItems = results.getElementsByTagName('li');

    // Show all results initially
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.display = ""; // Show all items
    }

    // Filter results based on input
    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i].textContent || listItems[i].innerText;
        if (item.toLowerCase().indexOf(input) === -1) {
            listItems[i].style.display = "none"; // Hide non-matching items
        }
    }
}