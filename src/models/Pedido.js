const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({

  usuario: {
    type: String,
    required: true
  },

  fecha: {
    type: String
  },

  productos: [
    {
      nombre: String,
      tamano: String,
      precio: Number
    }
  ],

  total: {
    type: Number,
    required: true
  }

});

module.exports =
mongoose.model(
  "Pedido",
  pedidoSchema
);