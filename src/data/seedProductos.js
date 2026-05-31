const mongoose = require("mongoose");
require("dotenv").config();

const Producto = require("../models/Producto");

const productos = [
  {
    nombre: "Pizza Hawaiana",
    descripcion: "Jamón y piña",
    categoria: "Pizza",
    precio: 199
  },
  {
    nombre: "Pizza Mexicana",
    descripcion: "Chorizo y jalapeño",
    categoria: "Pizza",
    precio: 219
  },
  {
    nombre: "Pizza Pepperoni",
    descripcion: "Pepperoni clásico",
    categoria: "Pizza",
    precio: 209
  },
  {
    nombre: "Pizza Queso",
    descripcion: "Mezcla de quesos",
    categoria: "Pizza",
    precio: 189
  },
  {
    nombre: "Pizza Pastor",
    descripcion: "Carne al pastor",
    categoria: "Pizza",
    precio: 229
  },
  {
    nombre: "Alitas Buffalo",
    descripcion: "Salsa buffalo",
    categoria: "Alitas",
    precio: 149
  },
  {
    nombre: "Alitas BBQ",
    descripcion: "Salsa BBQ",
    categoria: "Alitas",
    precio: 149
  },
  {
    nombre: "Alitas Crunchy",
    descripcion: "Empanizadas",
    categoria: "Alitas",
    precio: 159
  }
];

const seedProductos = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Producto.deleteMany();

    await Producto.insertMany(productos);

    console.log("Productos cargados correctamente");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProductos();