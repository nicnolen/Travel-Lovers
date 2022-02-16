const express = require('express');
const app = express();
const port = 3001;

//handlebar setup - Christian Ramirez
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
