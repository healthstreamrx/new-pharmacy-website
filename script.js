// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// WhatsApp Button – no JS override needed unless dynamic
// (HTML href already handles the action properly)

// Optional: confirmation alert on form submission
document.addEventListener("DOMContentLoaded", function () {
  const refillForm = document.querySelector(".refill form");
  if (refillForm) {
    refillForm.addEventListener("submit", function () {
      alert("✅ Thank you! Your request has been submitted.");
    });
  }
});
