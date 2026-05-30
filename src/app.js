const express = require("express");
const cors = require("cors");

const productosRoutes =
  require("./routes/productosRoutes");

const pedidosRoutes =
  require("./routes/pedidosRoutes");

const usuariosRoutes =
  require("./routes/usuariosRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/productos",
  productosRoutes
);

app.use(
  "/pedidos",
  pedidosRoutes
);

app.use(
  "/usuarios",
  usuariosRoutes
);

module.exports = app;