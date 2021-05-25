module.exports = (app) => {
    const objeto = require("../controllers/objeto.controller.js");

    var router = require("express").Router();

    // Crear obejto
    router.post("/", objeto.create);
    // Recuperar obejto por id
    router.get("/:id", objeto.buscarObjetoId);
    // Recuperar todos los objetos
    router.get("/", objeto.buscarObjetos);
    // Recuperar obejto por idUser
    router.get("/list/usuario", objeto.buscarObjetoIdUsuario);
    // Recuperar obejto por idCategoria
    router.get("/list/categoria", objeto.buscarObjetoIdCategoria);
    // Actualizar obejto por id
    router.put("/:id", objeto.update);
    // Eliminar obejto por id
    router.delete("/:id", objeto.deleteObjeto);


    //CATEGORIA
    // Recuperar Categorias
    router.get("/list/categorias", objeto.buscarCategorias);
    //ESTADO
    // Recuperar Categorias
    router.get("/list/estados", objeto.buscarEstados);

    app.use("/api/objeto", router);
};
