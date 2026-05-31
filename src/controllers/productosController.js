const Producto = require("../models/Producto");

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener productos",
      error: error.message
    });
  }
};

const crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear producto",
      error: error.message
    });
  }
};

module.exports = {
  obtenerProductos,
  crearProducto
};