'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan');
const nunjucks = require('nunjucks');
express.static('./public');

app.use(bodyParser.json());
app.use(morgan('dev'));

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
const env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.get('/', (req, res, next) => {
  res.render('index');
})

app.listen(3000,
  console.log('Listening on Port 3000')
  );

