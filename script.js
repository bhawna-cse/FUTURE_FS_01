// Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Bhawna, your message has been sent successfully! I will get back to you soon.');
    this.reset();
});

// Simple Scroll reveal
window.addEventListener('scroll', () => {
    let nav = document.querySelector('nav');
    if (window.scrollY > 50) nav.style.padding = "10px 10%";
    else nav.style.padding = "20px 10%";
});