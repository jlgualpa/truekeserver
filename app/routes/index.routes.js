
module.exports = (app) => {
    require("./perfil.routes")(app);
    require("./usuario.routes")(app);
    require("./objeto.routes")(app);
    require("./intercambio.routes")(app);
};








