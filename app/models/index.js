const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  define: {
    freezeTableName: true
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.perfil = require("./perfil.model.js")(sequelize, Sequelize);
db.contacto = require("./contacto.model.js")(sequelize, Sequelize);

db.perfil.hasMany(db.contacto, { as: 'Contactos' });

db.objeto = require("./objeto.model.js")(sequelize, Sequelize);
db.categoria = require("./categoria.model.js")(sequelize, Sequelize);
db.estado = require("./estado.model.js")(sequelize, Sequelize);

db.objeto.belongsTo(db.categoria, {
  foreignKey: 'id_categoria'
});

db.objeto.belongsTo(db.estado, {
  foreignKey: 'id_estado'
});

db.intercambio = require("./intercambio.model.js")(sequelize, Sequelize);

db.intercambio.belongsTo(db.objeto, {
  foreignKey: 'id_objeto'
});

db.intercambio.belongsTo(db.usuario, {
  foreignKey: 'id_usuario'
});

db.intercambio.belongsTo(db.estado, {
  foreignKey: 'id_estado'
});

db.mensaje = require("./mensaje.model.js")(sequelize, Sequelize);

db.mensaje.belongsTo(db.intercambio, {
  foreignKey: 'id_intercambio'
});

db.mensaje.belongsTo(db.usuario, {
  foreignKey: 'id_usuario'
});

module.exports = db;
