const db = require("../models");
const Objeto = db.objeto;
const Categoria = db.categoria;
const Estado = db.estado;

// Crear Objeto
exports.create = (req, res) => {
    const objeto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        id_usuario: req.body.id_usuario,
        id_categoria: req.body.id_categoria,
        id_estado: req.body.id_estado,
        imagen: req.body.imagen
    };
    Objeto.create(objeto)
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


// Buscar Objeto por id_usuario
exports.buscarObjetoIdUsuario = (req, res) => {
    const id_usuario = req.query.id_usuario;
    Objeto.findAll({
        where: {
            id_usuario: id_usuario
        }
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los objetos.",
            });
        });
};

// Buscar Objeto por id_categoria
exports.buscarObjetoIdCategoria = (req, res) => {
    const id_categoria = req.query.id_categoria;
    Objeto.findAll({
        where: {
            id_categoria: id_categoria
        }
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los objetos.",
            });
        });
};

// Recuperar Objeto por id
exports.buscarObjetoId = (req, res) => {
    const id = req.params.id;

    Objeto.findOne({
        where: {
            id: id
        },
        include: [{
            model: Categoria
        }, {
            model: Estado
        }]
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error al recuperar objeto con id=" + id,
            });
        });
};

// Recuperar todos las objetos
exports.buscarObjetos = (req, res) => {
    Objeto.findAll()
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

// Actualizar objeto por id
exports.update = (req, res) => {
    const id = req.params.id;

    Objeto.update(req.body, {
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Objeto actualizado.",
                });
            } else {
                res.send({
                    message: `Objeto con id=${id} no actualizado!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Objeto with id=" + id,
            });
        });
};


//Eliminar Objeto
exports.deleteObjeto = (req, res) => {
    const id = req.params.id;

    Objeto.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Objeto eliminado!",
                });
            } else {
                res.send({
                    message: `Objeto con id=${id} no eliminado`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Objeto with id=" + id,
            });
        });
};


//CATEGORIA//
// Recuperar todos las Categorias
exports.buscarCategorias = (req, res) => {
    Categoria.findAll()
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

//ESTADO//
//Obtener todos los estados de un objeto

exports.buscarEstados = (req, res) => {
    Estado.findAll(
        {
            where: {
                codigo: 'OBJ'
            }
        }
    )
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