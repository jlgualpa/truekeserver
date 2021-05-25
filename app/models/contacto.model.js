//Definición Modelo Contacto

module.exports = (sequelize, Sequelize) => {
    const Contacto = sequelize.define('contacto', {
        contacto: { type: Sequelize.STRING },
        tipo: {
            type: Sequelize.STRING
        },
        perfilId: {
            type: Sequelize.BIGINT
        }
    }, { timestamps: false });

    return Contacto;
};