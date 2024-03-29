const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public'));

//express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


 
app.get('/', (req, res) => {

  res.render('parciales/home', {
  	nombre: 'carlos fibla',
  	year: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {

  res.render('parciales/about', {
  	year: new Date().getFullYear()
  });
});

app.get('/data', (req, res) => {
  res.send('Hello DATA');

});
 
app.listen(port, () => {
	console.log(`Escuchando en puerto ${port}`);
});