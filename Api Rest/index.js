const express = require('express');
const routes = require('./routes');
const mongoose  = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');

//conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis',{
  useNewUrlParse:true
});

//crear el servidor
const app = express();

//Habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitar cors
app.use(cors());

//Rutas de la app
app.use('/',routes());

//puerto

app.listen(5000);