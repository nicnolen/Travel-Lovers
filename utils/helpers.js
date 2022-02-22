/* EXPORT FUNCTIONS TO MAKE TESTS PASS */
module.exports = {
  // constructor function to shorten URL
  format_url: (url) => {
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0];
  },
};
