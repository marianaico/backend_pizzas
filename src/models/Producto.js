const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({

  nombre: {
    type: String,
    required: true
  },

  descripcion: {
    type: String,
    default: ""
  },

  categoria: {
    type: String,
    enum: ["Pizza", "Alitas", "Bebida", "Postre"],
    default: "Pizza"
  },

  precio: {
    type: Number,
    required: true
  },

  imagen: {
    type: String,
    default: ""
  },

  disponible: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Producto",
  productoSchema
);