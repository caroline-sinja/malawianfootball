
const signUpForm = document.getElementById('signupForm');
const logInForm = document.getElementById('loginForm');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPassword = document.getElementById('signUpPassword');
const logInEmail = document.getElementById('logInEmail');
const logInPassword = document.getElementById('logInPassword');
const signUpErrorMessage = document.getElementById('signUpErrorMessage');
const logInErrorMessage = document.getElementById('logInErrorMessage');

// Sign Up Event Listener
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signUpEmail.value;
  const password = signUpPassword.value;

  // Firebase authentication sign-up
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      
      alert("Sign Up successful! Welcome!");
      // Redirect after successful sign-up (optional)
      window.location.href = "index.html"; // Example redirection
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      signUpErrorMessage.textContent = Error('invalid details')
     
    });
});

// Log In Event Listener
logInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = logInEmail.value;
  const password = logInPassword.value;

  // Firebase authentication log-in
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      
      alert("Log In successful!");
      // Redirect after successful log-in (optional)
      window.location.href = "index.html"; // Example redirection
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      logInErrorMessage.textContent = Error ('Invalid details');
      
    });
});

// Show Login Form when "Login" is clicked from Sign Up page
document.getElementById('showLoginForm').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('signUpSection').style.display = 'none';
  document.getElementById('logInSection').style.display = 'block';
});

// Show Sign Up Form when "Sign Up" is clicked from Log In page
document.getElementById('showSignUpForm').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('logInSection').style.display = 'none';
  document.getElementById('signUpSection').style.display = 'block';
});




