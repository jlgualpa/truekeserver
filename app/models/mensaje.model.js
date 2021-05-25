//Definición Modelo Mensaje
module.exports = (sequelize, Sequelize) => {
    const Mensaje = sequelize.define("mensaje", {
        mensaje: {
            type: Sequelize.STRING
        },
        id_intercambio: {
            type: Sequelize.BIGINT
        },
        id_usuario: {
            type: Sequelize.BIGINT
        },
        activo: {
            type: Sequelize.BOOLEAN
        },
        fecha_modificacion: {
            type: Sequelize.DATE
        }
    },
        {
            timestamps: false
        }
    );
    return Mensaje;
};
