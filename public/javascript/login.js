/* LOGIN PAGE FRONT END LOGIC */
// Reference error messages
const errorEl = document.getElementById('error-message');

// Signup form handler
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // If there is a username, email and password then make a post method
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
      errorEl.innerHTML = '';
      document.location.replace('/dashboard/');
    } else {
      errorEl.innerHTML = response.statusText;
    }
  }
}

// EVENT LISTENERS
// Signup event listener
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
