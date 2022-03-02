/* FRONT END JAVASCRIPT CODE FOR THE LOGIN PAGE */
// Reference error messages
const loginErrorEl = document.getElementById('login-error');
const signupErrorEl = document.getElementById('signup-error')

// HANDLER FUNCTIONS
// Function to handle signup form
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
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
      signupErrorEl.innerHTML = '';
      document.location.replace('/dashboard/');
    } else {
      signupErrorEl.innerHTML = `<b>${response.statusText}:</b> User already exists`;
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
      // clear error
      loginErrorEl.innerHTML = '';
      document.location.replace('/dashboard');
    } else {
      loginErrorEl.innerHTML = `<b>${response.statusText}:</b> User not found`;
    }
  }
}

// EVENT LISTENERS
// Event listener for the signup form
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

// Event listener to go to the signup form
document.getElementById('create-account').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.signup-form').removeAttribute('style');
  document.querySelector('.login-form').setAttribute('style', 'display: none');
});

// Event listener to go back to login form
document.querySelector('.icon-remove-sign').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.signup-form').setAttribute('style', 'display: none');
  document.querySelector('.login-form').removeAttribute('style');
});

// Event listener for the login form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
