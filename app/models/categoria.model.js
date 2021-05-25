//Definición Modelo Categoria

module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define('categoria', {
        etiqueta: { type: Sequelize.STRING },
        descripcion: { type: Sequelize.STRING }
    }, { timestamps: false });

    return Categoria;
};