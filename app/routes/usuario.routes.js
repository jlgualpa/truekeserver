module.exports = (app) => {
  const usuario = require("../controllers/usuario.controller.js");

  var router = require("express").Router();

  // Crear usuario
  router.post("/registrar", usuario.registrar);
  // Login Usuario
  router.get("/login", usuario.login);
  // Recuperar Usuario por Email
  router.get("/", usuario.buscarUsuarioEmail);
  // Recuperar usuario por id
  router.get("/:id", usuario.findOne);
  // Actualizar usuario por id
  router.put("/:id", usuario.update);
  // Eliminar usuario por id
  router.delete("/:id", usuario.delete);

  app.use("/api/usuario", router);
};
