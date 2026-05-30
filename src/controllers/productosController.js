const productos =
require("../data/productos");

const obtenerProductos =
(req, res) => {

  res.status(200).json(productos);

};

module.exports = {
  obtenerProductos
};