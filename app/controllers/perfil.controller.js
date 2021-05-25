const db = require("../models");
const Perfil = db.perfil;
const Contacto = db.contacto;

/*PERFIL*/
// Crear Perfil
exports.create = (req, res) => {
    const perfil = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        sexo: req.body.sexo,
        fecha_nacimiento: req.body.fecha_nacimiento,
        id_usuario: req.body.id_usuario,
        direccion: req.body.direccion,
        imagen: req.body.imagen
    };
    Perfil.create(perfil)
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

// Buscar Perfil por id_usuario
exports.buscarPerfil = (req, res) => {
    const id_usuario = req.query.id_usuario;
    Perfil.findOne({
        where: {
            id_usuario: id_usuario
        },
        include: [{
            model: Contacto,
            as: 'Contactos'
        }]
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los perfiles.",
            });
        });
};

// Actualizar perfil por id
exports.update = (req, res) => {
    const id = req.params.id;

    Perfil.update(req.body, {
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Perfil actualizado.",
                });
            } else {
                res.send({
                    message: `Perfil con id=${id} no actualizado!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating perfil with id=" + id,
            });
        });
};

// Recuperar perfil por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Perfil.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error al recuperar perfil con id=" + id,
            });
        });
};

// Eliminar perfil por id
exports.delete = (req, res) => {
    const id = req.params.id;

    Perfil.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Perfil eliminado!",
                });
            } else {
                res.send({
                    message: `Perfil con id=${id} no eliminado`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Perfil with id=" + id,
            });
        });
};


/*CONTACTO*/
// Crear Contacto
exports.createContacto = (req, res) => {
    const contacto = {
        contacto: req.body.contacto,
        perfilId: req.body.perfilId,
        tipo: req.body.tipo
    };
    Contacto.create(contacto)
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

// Recuperar todos los Contactos
exports.buscarContactos = (req, res) => {
    const perfilId = req.query.perfilId;
    Contacto.findAll({
        where: {
            perfilId: perfilId
        }
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los Contatos.",
            });
        });
};

//Eliminar Contacto
exports.deleteContacto = (req, res) => {
    const id = req.params.id;

    Contacto.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Contacto eliminado!",
                });
            } else {
                res.send({
                    message: `Contacto con id=${id} no eliminado`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Contacto with id=" + id,
            });
        });
};





