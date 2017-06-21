const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

const listItems =
[{"label": "Learn Node basics"}, {"label": "Learn Express basics"}, {"label": "Learn HTML forms"}, {"label": "Learn about authentication"}, {"label": "Learn how to connect to PostgreSQL", }, {"label": "Learn how to create databases"}, {"label": "Learn SQL"}, {"label": "Learn how to connect to PostgreSQL from Node"}];

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/todo/', function (req, res) {
  res.render('todo', {listItems});
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
