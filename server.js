import express from "express";
import { conexion } from "./db/conexionDB.js";
import { variables } from "./utils/variables.js";
import carreraRepositorio from "./db/repositorios/carreraRepositorio.js";
import rolRepositorio from "./db/repositorios/rolRepositorio.js";
import { configuracionSeguridad } from "./security/configuracionSeguridad.js";

var app = express();

const PORT = variables.EXPRESS_PORT;
const HOST = variables.EXPRESS_HOST;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

conexion
  .clienteMySQL()
  .then((connection) => {
    app
    .listen(PORT, HOST, () => {
      console.log(`Escuchando por el servidor http://${HOST}:${PORT}`);

      carreraRepositorio.crear().then(() => {
      console.log("Carreras creadas.");
      });

      rolRepositorio.crear().then(() => {
      console.log("Roles creados.");
      });
    });
  })
  .catch((err) => {
    console.error("Error al conectar con la base de datos MySQL:", err);
    process.exit();
  });

configuracionSeguridad(app);