document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Clear any previous error or success messages
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";
  document.getElementById("successMsg").innerText = "";

  // Get values from form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let valid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    valid = false;
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    valid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required.";
    valid = false;
  }

  // Show success message if all inputs are valid
  if (valid) {
    document.getElementById("successMsg").innerText = "Form submitted successfully!";
    document.getElementById("contactForm").reset(); // Optional: reset form
  }
});
