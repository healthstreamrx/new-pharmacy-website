// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// WhatsApp Floating Button - Auto open WhatsApp chat
document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.querySelector(".whatsapp-float");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function () {
      const phoneNumber = "5162243044";
      const message = encodeURIComponent("Hello! I have a question about your pharmacy services.");
      window.open(`https://wa.me/1${phoneNumber}?text=${message}`, "_blank");
    });
  }
});

// Simple form submission alert (optional)
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent. We'll respond shortly.");
    this.reset(); // Clear form
  });
}
