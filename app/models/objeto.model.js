//Definición Modelo Objeto

module.exports = (sequelize, Sequelize) => {
    const Objeto = sequelize.define("objeto", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        id_usuario: {
            type: Sequelize.BIGINT
        },
        id_categoria: {
            type: Sequelize.BIGINT
        },
        id_estado: {
            type: Sequelize.BIGINT
        },
        activo: {
            type: Sequelize.BOOLEAN
        },
        fecha_modificacion: {
            type: Sequelize.DATE
        },
        disponible: {
            type: Sequelize.BOOLEAN
        },
        imagen: {
            type: Sequelize.BLOB('long')
        }
    },
        {
            timestamps: false
        }
    );
    return Objeto;
};

