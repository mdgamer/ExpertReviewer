
    document.addEventListener('DOMContentLoaded', () => {
        const browseProductsLink = document.querySelector('.nav li:first-child a'); // Select "Browse Products"
        const collapsibleContainer = document.querySelector('.header-collapsible-container'); // Collapsible container

        let isHovering = false; // To track if the mouse is hovering over the link or container

        // Show the container when hovering over "Browse Products"
        browseProductsLink.addEventListener('mouseenter', () => {
            isHovering = true;
            collapsibleContainer.style.display = 'flex'; // Show container
            setTimeout(() => {
                collapsibleContainer.style.opacity = '1'; // Fade in smoothly
            }, 10); // Small delay to allow display change to take effect
        });

        // Show the container when hovering over the collapsible container
        collapsibleContainer.addEventListener('mouseenter', () => {
            isHovering = true;
            collapsibleContainer.style.opacity = '1'; // Ensure it remains visible
        });

        // Hide the container when the mouse leaves both elements
        browseProductsLink.addEventListener('mouseleave', () => {
            isHovering = false;
            setTimeout(() => {
                if (!isHovering) {
                    collapsibleContainer.style.opacity = '0'; // Fade out smoothly
                    setTimeout(() => {
                        collapsibleContainer.style.display = 'none'; // Hide container after fading out
                    }, 300); // Match the fade-out duration
                }
            }, 100); // Delay for smooth transition
        });

        collapsibleContainer.addEventListener('mouseleave', () => {
            isHovering = false;
            setTimeout(() => {
                if (!isHovering) {
                    collapsibleContainer.style.opacity = '0'; // Fade out smoothly
                    setTimeout(() => {
                        collapsibleContainer.style.display = 'none'; // Hide container after fading out
                    }, 300); // Match the fade-out duration
                }
            }, 100); // Delay for smooth transition
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Add or remove 'show' class
    });

    // Optional: Close the menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const reviewCards = document.querySelectorAll(".review-card");

    // Loop through each review card
    reviewCards.forEach(card => {
        const reviewText = card.querySelector(".review-text");

        // Add click event listener to the review text
        reviewText.addEventListener("click", function () {
            // Toggle the 'expanded' class to expand/collapse the review text
            this.classList.toggle("expanded");

            // Optionally, toggle the card to add/remove an "expanded" state for styling
            card.classList.toggle("expanded");
        });
    });
});

