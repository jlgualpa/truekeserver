//Definición Modelo Estado

module.exports = (sequelize, Sequelize) => {
    const Estado = sequelize.define('estado', {
        etiqueta: { type: Sequelize.STRING },
        descripcion: { type: Sequelize.STRING },
        codigo: { type: Sequelize.STRING }
    }, { timestamps: false });

    return Estado;
};