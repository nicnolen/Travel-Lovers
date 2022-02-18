const express = require('express');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./controllers');

//handlebar setup - Christian Ramirez
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
