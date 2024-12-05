// Smooth scroll for navigation links (optional if you have navigation links or buttons)
document.querySelectorAll('.contact-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetURL = button.getAttribute('href');
        if (targetURL) {
            window.open(targetURL, '_blank');
        }
    });
});

// Example: A function to display an alert when users interact with a contact method
document.querySelectorAll('.contact-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        alert("You're being redirected to the respective contact page!");
    });
});
