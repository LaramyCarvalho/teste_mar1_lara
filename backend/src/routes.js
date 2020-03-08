const express = require('express');
const routes = express.Router();
const CadastroController = require('./controllers/CadastroController');

routes.get("/cadastros", CadastroController.index);
routes.get("/cadastros/:id", CadastroController.show);
routes.post("/cadastros",CadastroController.store);
routes.put("/cadastros/:id", CadastroController.update);
routes.delete("/cadastros/:id", CadastroController.delete);


module.exports = routes;
