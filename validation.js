function validateForm() {
  const email = document.forms["feedbackForm"]["email"].value;
  if (email === "") {
    alert("Email is required");
    return false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email format");
    return false;
  }
  // Add more validation for checkboxes, radio buttons, etc.
  return true;
}

function submitFeedback(event) {
  event.preventDefault();

  const form = document.forms["feedbackForm"];

  const data = {
    name: form.name.value,
    email: form.email.value,
    rating: form.rating.value,
    services: Array.from(form.querySelectorAll('input[name="services[]"]:checked')).map(cb => cb.value),
    preference: form.preference.value,
    message: form.message.value
  };

  fetch("/api/feedback.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(response => {
      alert(response.message);
    })
    .catch(err => {
      alert("Something went wrong.");
      console.error(err);
    });

  return false;
}
