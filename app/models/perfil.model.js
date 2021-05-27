//Definición Modelo Perfil

module.exports = (sequelize, Sequelize) => {
    const Perfil = sequelize.define("perfil", {
        nombres: {
            type: Sequelize.STRING
        },
        apellidos: {
            type: Sequelize.STRING
        },
        sexo: {
            type: Sequelize.STRING
        },
        fecha_nacimiento: {
            type: Sequelize.DATE
        },
        direccion: {
            type: Sequelize.STRING
        },
        id_usuario: {
            type: Sequelize.BIGINT
        },
        activo: {
            type: Sequelize.BOOLEAN
        },
        fecha_modificacion: {
            type: Sequelize.DATE
        },
        imagen: {
            type: Sequelize.BLOB('long')
        }
    },
        {
            timestamps: false
        }
    );
    return Perfil;
};
