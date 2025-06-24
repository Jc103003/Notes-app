const formLogin = document.getElementById("form-login");
const emailInput = document.getElementById("login-email");
const emailError = document.getElementById("email-error");

emailError.style.display = 'none'
// Google sign in button
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
// Taking inputs from email and password after submit
formLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value; 
    console.log(email, password);
  })
// Checking caps lock
function checkCapsLock(event) {
  const capsLockWarning = document.getElementById('caps-lock-warning')
  if (event.getModifierState('CapsLock')) {
    capsLockWarning.style.display = 'block';
  } else {
    capsLockWarning.style.display = 'none';
  }
}
// Form validation
// TODO: update email validation, currently not regex compliant, only for front end dev
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}

emailInput.addEventListener('blur',  ()=> {
  const email = emailInput.value;
  if (!isValidEmail(email)) {
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
  }
} )
