const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

const app = express();

var corsOptions = {
  //origin: "http://localhost:8081",
  origin: process.env.ORIGIN
};

app.use(cors(corsOptions));

const db = require("./app/models");
db.sequelize.sync();
/* Para eliminar las tablas y volver a crear desde cero
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
*/

// Enviar y resibir peticiones de contenido tipo json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* app.use(bodyParser.json({ limit: '10000kb' }));
app.use(bodyParser.urlencoded({ limit: '10000kb', extended: true }));
app.use(express.json()); */

// Ruta principal y mensaje en la pagina principal.
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API REST de la base de datos Trueke." });
});

require("./app/routes/index.routes")(app);

// Definicion del puerto que utilizara la App
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
