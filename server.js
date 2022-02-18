/* SERVER */
// NODE.JS MODULES
const path = require('path'); // Import the Path module to work with directories and file paths

// DEPENDENCIES
const express = require('express');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./controllers');

//handlebar setup - Christian Ramirez
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// Set Handlebars.js as app's template engine choice
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Allow the app to use the controllers
app.use(require('./controllers'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
