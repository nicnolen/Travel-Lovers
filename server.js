/* SERVER */
// NODE.JS MODULES
const path = require('path'); // Import the Path module to work with directories and file paths

// DEPENDENCIES
const express = require('express');
require('dotenv').config(); // Import and configure the dotenv dependency so we can use process.env for sensitive information
const sequelize = require('./config/connection');
// Handlebar setup
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;
const app = express();

// Set Handlebars.js as app's template engine choice
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/* Express.js MIDDLEWARE FUNCTIONS */
app.use(express.json()); // Let express know we want the data in JSON format
app.use(express.urlencoded({ extended: false })); // What kind of encoding we want to do
app.use(express.static(path.join(__dirname, 'public'))); // Takes the content of the `public` folder and makes them static assets

// Allow the app to use the controllers
app.use(require('./controllers'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
