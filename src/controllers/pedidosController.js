const Pedido =
require("../models/Pedido");

// Obtener todos los pedidos
const obtenerPedidos =
async (req, res) => {

  try {

    const pedidos =
      await Pedido.find()
      .sort({ _id: -1 });

    res.status(200)
    .json(pedidos);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje:
      "Error al obtener pedidos"
    });

  }

};

// Obtener pedido por ID
const obtenerPedido =
async (req, res) => {

  try {

    const pedido =
      await Pedido.findById(
        req.params.id
      );

    if (!pedido) {

      return res.status(404)
      .json({
        mensaje:
        "Pedido no encontrado"
      });

    }

    res.status(200)
    .json(pedido);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje:
      "Error al obtener pedido"
    });

  }

};

// Crear pedido
const crearPedido =
async (req, res) => {

  try {

    console.log(
      "BODY RECIBIDO:"
    );

    console.log(req.body);

    const {
      usuario,
      productos,
      total
    } = req.body;

    if (!usuario) {

      return res.status(400)
      .json({
        mensaje:
        "Debe iniciar sesión"
      });

    }

    if (!productos ||
        !Array.isArray(
          productos
        )) {

      return res.status(400)
      .json({
        mensaje:
        "Productos inválidos"
      });

    }

    const nuevoPedido =
      new Pedido({

        usuario,

        fecha:
          new Date()
          .toLocaleString(),

        productos,

        total:
          total || 0

      });

    await nuevoPedido.save();

    res.status(201)
    .json({

      mensaje:
      "Pedido creado correctamente",

      pedido:
        nuevoPedido

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje:
      "Error al crear pedido"
    });

  }

};

module.exports = {

  obtenerPedidos,

  obtenerPedido,

  crearPedido

};