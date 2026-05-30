const express =
require("express");

const router =
express.Router();

const {
  obtenerPedidos,
  obtenerPedido,
  crearPedido
} = require(
  "../controllers/pedidosController"
);

router.get(
  "/",
  obtenerPedidos
);

router.get(
  "/:id",
  obtenerPedido
);

router.post(
  "/",
  crearPedido
);

module.exports = router;