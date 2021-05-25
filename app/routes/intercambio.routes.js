module.exports = (app) => {
    const intercambio = require("../controllers/intercambio.controller.js");

    var router = require("express").Router();

    // Crear Intercambio
    router.post("/", intercambio.create);
    // Recuperar Intercambio por id
    router.get("/:id", intercambio.buscarIntercambioId);
    // Recuperar Intercambio por id_objeto
    router.get("/objeto/:id", intercambio.buscarIntercambioIdObjeto);
    // Recuperar Intercambio por idUser
    router.get("/", intercambio.buscarIntercambioIdUsuario);
    // Recuperar todos los intercambios
    router.get("/usuario/list", intercambio.buscarIntercambios);
    // Actualizar intercambio por id
    router.put("/:id", intercambio.update);

    /*MENSAJE*/
    // Crear mensjae
    router.post("/mensaje", intercambio.createMensaje);
    // Recuperar Mensajes por intercambio
    router.get("/mensaje/list", intercambio.buscarMensajes);

    app.use("/api/intercambio", router);
};
