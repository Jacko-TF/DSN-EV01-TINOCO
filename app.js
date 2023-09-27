const express = require("express");

const bodyParser = require('body-parser');

const app = express();

const config = require('./src/config/config');

const alumno_routes = require('./src/routes/alumnoRouter')

const connection = require('./src/database/dbController')

connection()

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.get('/', (req, res) =>{
  res.render("index")
})

app.use('/alumnos', alumno_routes);

app.listen(config.port, () => {
  console.log(`Servidor corriendo en http://localhost:${config.port}`);
});