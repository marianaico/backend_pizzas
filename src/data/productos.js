const Producto =
require("../models/Producto");

const obtenerProductos =
async (req, res) => {

  try {

    const productos =
    await Producto.find();

    res.status(200)
      .json(productos);

  } catch (error) {

    res.status(500).json({
      mensaje:
      "Error al obtener productos"
    });

  }

};

module.exports = {
  obtenerProductos
};