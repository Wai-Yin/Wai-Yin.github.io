// assets/js/mobile-menu.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const openButton = document.getElementById('open-mobile-menu');
    const closeButton = document.getElementById('close-mobile-menu');

    function openMobileMenu() {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    function closeMobileMenu() {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = ''; // Restore scrolling
    }

    openButton.addEventListener('click', openMobileMenu);
    closeButton.addEventListener('click', closeMobileMenu);

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});