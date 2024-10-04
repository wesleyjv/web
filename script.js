const reviewCard = document.querySelector('#review_card');
    const cardContainer = document.querySelector('#review_card_container');

    cardContainer.addEventListener('mousemove', (e) => {
        const cardRect = reviewCard.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;

        // Calculate the center of the card
        const centerX = cardRect.left + cardWidth / 2;
        const centerY = cardRect.top + cardHeight / 2;

        // Calculate the position of the mouse relative to the center
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        // Calculate the rotation angles (adjust the multiplier for sensitivity)
        const rotateX = (deltaY / cardHeight) * 15; // Max rotation of 15 degrees
        const rotateY = -(deltaX / cardWidth) * 15; // Negative for correct direction

        // Apply the transform to the card
        reviewCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    // Reset rotation when the mouse leaves the card
    cardContainer.addEventListener('mouseleave', () => {
        reviewCard.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });