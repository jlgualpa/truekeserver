const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

// Crear Usuario
exports.registrar = (req, res) => {
  const usuario = {
    email: req.body.email,
    password: req.body.password,
  };

  Usuario.create(usuario)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error al crear Perfil.",
      });
    });
};

// Login Usuario
exports.login = (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  Usuario.findOne({
    where: {
      [Op.and]: [
        { email: email }, { password: password }
      ]
    }
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error al recuperar los usuarios.",
      });
    });
};

// Buscar Usuario por Email
exports.buscarUsuarioEmail = (req, res) => {
  const email = req.query.email;
  Usuario.findOne({
    where: {
      email: email
    }
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error al recuperar los usuarios.",
      });
    });
};

// Recuperar usuario por id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al recuperar usuario con id=" + id,
      });
    });
};

// Actualizar usuario por id
exports.update = (req, res) => {
  const id = req.params.id;

  Usuario.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuario actualizado.",
        });
      } else {
        res.send({
          message: `Usuario con id=${id} no actualizado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

// Eliminar usuario por id
exports.delete = (req, res) => {
  const id = req.params.id;

  Usuario.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuario eliminado!",
        });
      } else {
        res.send({
          message: `Usuario con id=${id} no eliminado`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};



