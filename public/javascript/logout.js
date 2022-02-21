/* LOGOUT PAGE */
// Event handler for logout route
async function logout() {
  const response = await fetch('/api/user/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application.json' },
  });
}
