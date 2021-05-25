const db = require("../models");
const Intercambio = db.intercambio;
const Objeto = db.objeto;
const Usuario = db.usuario;
const Estado = db.estado;
const Mensaje = db.mensaje;

// Crear Intercambio
exports.create = (req, res) => {
    const intercambio = {
        id_objeto: req.body.id_objeto,
        id_usuario: req.body.id_usuario,
        id_estado: req.body.id_estado
    };
    Intercambio.create(intercambio)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error al crear objeto.",
            });
        });
};

// Recuperar Intercanbio por id
exports.buscarIntercambioId = (req, res) => {
    const id = req.params.id;

    Intercambio.findByPk(id, {
        include: [{
            model: Objeto
        }, {
            model: Usuario
        }, {
            model: Estado
        }]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Intercambio with id=" + id
            });
        });
};

// Recuperar Intercanbio por id_objeto
exports.buscarIntercambioIdObjeto = (req, res) => {
    const id_objeto = req.params.id;
    Intercambio.findOne({
        where: {
            id_objeto: id_objeto
        },
        include: [{
            model: Objeto
        }, {
            model: Usuario
        }, {
            model: Estado
        }]
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error al recuperar Intercambio del id_objeto=" + id_objeto,
            });
        });
};

// Buscar Intercambio por id_usuario
exports.buscarIntercambioIdUsuario = (req, res) => {
    const id_usuario = req.query.id_usuario;
    Intercambio.findAll({
        where: {
            id_usuario: id_usuario
        },
        include: [{
            model: Objeto
        }, {
            model: Estado
        }]
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los intercambios.",
            });
        });
};

// Buscar todos los intercambios
exports.buscarIntercambios = (req, res) => {
    Intercambio.findAll({
        include: [{
            model: Objeto
        }, {
            model: Estado
        }]
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar las Categortias.",
            });
        });
};


// Actualizar Intercambio por id
exports.update = (req, res) => {
    const id = req.params.id;

    Intercambio.update(req.body, {
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Intercambio actualizado.",
                });
            } else {
                res.send({
                    message: `Intercambio con id=${id} no actualizado!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Intercambio with id=" + id,
            });
        });
};

/*MENSAJE*/
// Crear Mensaje
exports.createMensaje = (req, res) => {
    const mensaje = {
        mensaje: req.body.mensaje,
        id_intercambio: req.body.id_intercambio,
        id_usuario: req.body.id_usuario
    };
    Mensaje.create(mensaje)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error al crear mensaje.",
            });
        });
};

// Recuperar todos los Mensajes por intercambio
exports.buscarMensajes = (req, res) => {
    const id_intercambio = req.query.id_intercambio;
    Mensaje.findAll({
        where: {
            id_intercambio: id_intercambio
        },
        order: [['id', 'DESC']]
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los mensajes.",
            });
        });
};