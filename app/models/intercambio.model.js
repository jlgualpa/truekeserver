//Definición Modelo Objeto

module.exports = (sequelize, Sequelize) => {
    const Intercambio = sequelize.define("intercambio", {
        id_objeto: {
            type: Sequelize.BIGINT
        },
        id_usuario: {
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
        calificado: {
            type: Sequelize.BOOLEAN
        },
        puntaje: {
            type: Sequelize.INTEGER
        }
    },
        {
            timestamps: false
        }
    );
    return Intercambio;
};
