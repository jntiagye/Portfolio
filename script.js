// Update year automatically
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Contact form handler
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    contactForm.reset();
});