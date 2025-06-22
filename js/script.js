const formLogin = document.getElementById("form-login");

//google sign in button
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
//taking inputs from email and password after submit
formLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value; 
    console.log(email, password);
  })

function checkCapsLock(event) {
  const capsLockWarning = document.getElementById('caps-lock-warning')
  if (event.getModifierState('CapsLock')) {
    capsLockWarning.style.display = 'block';
  } else {
    capsLockWarning.style.display = 'none';
  }
}
