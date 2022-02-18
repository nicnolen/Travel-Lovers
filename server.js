const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const port = process.env.PORT || 3001;

//handlebar setup - Christian Ramirez
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// turn on routes
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
