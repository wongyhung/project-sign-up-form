document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            isValid = false;
            alert("Passwords do not match!");
        }

        // Check if required fields are filled
        if (!form.checkValidity()) {
            isValid = false;
            alert("Please fill in all required fields correctly.");
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        } else {
            alert("Registration successful! Please check your email for verification.");
        }
    });
});