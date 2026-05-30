const Usuario =
require("../models/Usuario");

// Registrar usuario
const registrarUsuario =
async (req, res) => {

  try {

    const {
      nombre,
      correo,
      password
    } = req.body;

    const existe =
      await Usuario.findOne({
        correo
      });

    if (existe) {

      return res.status(400)
      .json({
        mensaje:
        "El correo ya existe"
      });

    }

    const nuevoUsuario =
      new Usuario({

        nombre,
        correo,
        password

      });

    await nuevoUsuario.save();

    res.status(201)
    .json({

      mensaje:
        "Usuario registrado",

      usuario:
        nuevoUsuario

    });

  } catch (error) {

    console.log(error);

    res.status(500)
    .json({
      mensaje:
      "Error al registrar usuario"
    });

  }

};

// Login
const loginUsuario =
async (req, res) => {

  try {

    const {
      correo,
      password
    } = req.body;

    const usuario =
      await Usuario.findOne({
        correo
      });

    if (!usuario) {

      return res.status(404)
      .json({
        mensaje:
        "Usuario no encontrado"
      });

    }

    if (
      usuario.password !==
      password
    ) {

      return res.status(400)
      .json({
        mensaje:
        "Contraseña incorrecta"
      });

    }

    res.status(200)
    .json({

      mensaje:
        "Login correcto",

      usuario

    });

  } catch (error) {

    console.log(error);

    res.status(500)
    .json({
      mensaje:
      "Error al iniciar sesión"
    });

  }

};

module.exports = {

  registrarUsuario,

  loginUsuario

};