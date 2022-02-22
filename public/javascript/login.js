/* FRONT END JAVASCRIPT CODE FOR THE LOGIN PAGE */
// Reference error messages
const errorEl = document.getElementById('error-message');

// HANDLER FUNCTIONS
// Function to handle signup form
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    // clear error messages
    errorEl.innerHTML = '';

    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    // check response status
    if (response.ok) {
      errorEl.innerHTML = '';
      document.location.replace('/dashboard/');
    } else {
      errorEl.innerHTML = response.statusText;
    }
  }
}

// Function to handle login form
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // if there is a valid email and password
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post', // what method we are using in the request
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      errorEl.innerHTML = response.statusText;
    }
  }
}

// EVENT LISTENERS
// Event listener for the signup form
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

// Event listener for the login form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
