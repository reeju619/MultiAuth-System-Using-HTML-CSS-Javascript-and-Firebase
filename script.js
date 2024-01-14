async function submitForm() {
    var userType = document.querySelector('select[name="userType"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var username = document.querySelector('input[name="username"]').value;

    // Validate fields
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (!username || !validateUsername(username)) {
        usernameError.textContent = "Please enter a valid username like user123.";
        return;
    }
    if (!email || !validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }
    if (!password || !validatePassword(password)) {
        passwordError.textContent = "Password should be atleast 6 characters";
        return;
    }

    // If all validations pass, proceed with Firebase authentication
    // Code for Firebase authentication goes here

    // Store user data in the Firebase database
    await set(ref(database, 'users/' + username), {
        email: email,
        userType: userType
    });

    // Redirect based on user type
    if (userType === 'admin') {
        window.location.href = 'dashboard.php';
    } else {
        window.location.href = 'home.html';
    }
}
  