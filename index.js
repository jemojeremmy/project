// Function to redirect
function redirectTo(id) {
    document.location.href = id;
}

document.addEventListener('DOMContentLoaded', function() {
    const appointmentButton = document.querySelector('.btn.has-before');
    const servicesLink = document.querySelector('.navbar-item:nth-child(2) .navbar-link');
    const gallerySection = document.getElementById('gallery');

    // Check if appointmentButton exists before adding event listener
    if (appointmentButton) {
        appointmentButton.addEventListener('click', function() {
            redirectTo("#appointment");
        });
    }

    // Check if servicesLink exists before adding event listener
    if (servicesLink) {
        servicesLink.addEventListener('click', function() {
            redirectTo("#gallery");
        });
    }

    // Check if gallerySection exists before scrolling
    if (gallerySection) {
        // Scroll to the gallery section when the "OUR SERVICES" link is clicked
        servicesLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            gallerySection.scrollIntoView({ behavior: 'smooth' }); // Scroll to gallery section smoothly
        });
    }

    // Loop through gallery cards and add event listener to each
    const galleryCards = document.querySelectorAll('.gallery-card');
    galleryCards.forEach(card => {
        const likeIcon = card.querySelector('.card-content .far.fa-heart');
        if (likeIcon) {
            let likeCountElement = card.querySelector('.like-count');
            let likeCount = likeCountElement ? parseInt(likeCountElement.innerText) : 0;
            let isLiked = false;

            likeIcon.addEventListener('click', function() {
                if (!isLiked) {
                    likeIcon.classList.remove('far');
                    likeIcon.classList.add('fas');
                    likeIcon.style.color = 'red';
                    likeCount++;
                    isLiked = true;
                } else {
                    likeIcon.classList.remove('fas');
                    likeIcon.classList.add('far');
                    likeIcon.style.color = '';
                    likeCount--;
                    isLiked = false;
                }
                if (likeCountElement) {
                    likeCountElement.innerText = likeCount;
                }
            });
        }
    });
});
