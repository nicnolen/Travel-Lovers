/* SERVER */
// NODE.JS MODULES
const path = require('path'); // Import the Path module to work with directories and file paths

// DEPENDENCIES
const express = require('express');
require('dotenv').config(); // Import and configure the dotenv dependency so we can use process.env for sensitive information
const exphbs = require('express-handlebars'); // Handlebar setup
const Handlebars=require('handlebars')
const session = require('express-session'); // Import express-session to let us connect to the backend
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Import connect-session-sequelize to automatically store the sessions created by express-session into our database

// FILE PATHS
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// Set up Express.js session and connect session to Sequelize database
const sess = {
  secret: "secret", // session cookie id
  cookie: {
    expires: 60 * 60 * 1000, // session expires in 1 hour
  },
  resave: false, // wont force the session to be saved back to session store without modifications
  saveUninitialized: true, // Force uninitialized sessions to be saved to the store. A session is uninitialized when it is new but not modified
  store: new SequelizeStore({
    db: sequelize,
  }), // creates a new session store with the database as sequelize
};

const PORT = process.env.PORT || 3001; // provide a port dynamically
const app = express(); // assign express.js as a variable

// Allow the app to use the session
app.use(session(sess));

// Create a new Handlebars helper
const hbs = exphbs.create({ 
  helpers,
});

// Set Handlebars.js as app's template engine choice
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express.js middleware functions
app.use(express.json()); // Let express know we want the data in JSON format
app.use(express.urlencoded({ extended: false })); // What kind of encoding we want to do
app.use(express.static(path.join(__dirname, 'public'))); // Takes the content of the `public` folder and makes them static assets

// Allow the app to use the controllers
app.use(require('./controllers'));


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
}); // NOTE if you change force to `true` then Sequelize will drop and recreate all database tables on start
