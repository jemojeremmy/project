document.addEventListener('DOMContentLoaded', function() {
    // Get the appointment button
    const appointmentButton = document.querySelector('.btn.has-before');

    // Get the services link
    const servicesLink = document.querySelector('.navbar-item:nth-child(2) .navbar-link');

    // Get all the gallery card elements
    const galleryCards = document.querySelectorAll('.gallery-card');

    // Function to handle redirection
    function redirectTo(sectionId) {
        window.location.href = sectionId;
    }

    // Add click event listener to the appointment button
    appointmentButton.addEventListener('click', function() {
        redirectTo("#appointment");
    });

    // Add click event listener to the services link
    servicesLink.addEventListener('click', function() {
        redirectTo("#gallery");
    });

    // Add click event listener to the gallery icons
    galleryCards.forEach(card => {
        const iconLink = card.querySelector('.card-btn ion-icon');
        iconLink.addEventListener('click', function() {
            redirectTo("#appointment");
        });
    });
});
