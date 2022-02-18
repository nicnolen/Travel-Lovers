/* LOGIN PAGE FRONT END LOGIC */

// Signup form handler
function signupFormHandler(event) {
  event.preventDefault();
}

// EVENT LISTENERS
// Signup event listener
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
