document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      const { value: email } = document.getElementById("email");
      const { value: confirmEmail } = document.getElementById("confirmEmail");

      if (email !== confirmEmail) {
        alert("The email addresses entered do not match.");
        event.preventDefault();
      }
    });
  }
});
