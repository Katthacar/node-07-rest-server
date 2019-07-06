require('./config/config');

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.json('Hello Universe');
})

app.get('/users', (req, res) => {
  res.json('Get Users');
})

app.post('/users', (req, res) => {
  let body = req.body;
  if (body.name === undefined) res.status(400).json({
    status: {
      error: true,
      code: 400,
      msg: 'Nombre es Necesario'
    }
  });
  else
    res.json({
      person: body
    });
})

app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  res.json({
    id
  });
})

app.delete('/users', (req, res) => {
  res.json('Delete Users');
})

app.listen(PORT, () => console.log(`Listen on Port ${PORT}`));
