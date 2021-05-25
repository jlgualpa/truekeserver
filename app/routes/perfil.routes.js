module.exports = (app) => {
    const perfil = require("../controllers/perfil.controller.js");

    var router = require("express").Router();

    // Crear perfil
    router.post("/", perfil.create);
    // Recuperar Perfil por idUser
    router.get("/", perfil.buscarPerfil);
    // Actualizar perfil por id
    router.put("/:id", perfil.update);
    // Recuperar perfil por id
    router.get("/:id", perfil.findOne);
    // Eliminar perfil por id
    router.delete("/:id", perfil.delete);

    /*CONTACTO*/
    // Crear contacto
    router.post("/contacto", perfil.createContacto);
    // Eliminar Contacto por id
    router.delete("/contacto/:id", perfil.deleteContacto);
    // Recuperar Contactos Perfil
    router.get("/contacto/list", perfil.buscarContactos);

    app.use("/api/perfil", router);
};
