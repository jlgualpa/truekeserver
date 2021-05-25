//Definición Modelo Usuario

module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("usuario", {
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
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
  return Usuario;
};
