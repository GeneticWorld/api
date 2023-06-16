import { Router } from "express";
import * as controller from "../controllers/email.controllers";

const route = Router();

route.get("/", (req, res) => {
    res.send(`<h1>Hola Mundo<h1>`);
});

// MUESTRA TODOS LOS REGISTROS
route.get("/email", controller.findAllEmail);

// MUESTRA SOLO 1 REGISTRO
route.get("/email/:id", controller.findEmail);

// INSERTA INFO
route.post("/email", controller.insertEmail);

// ACTUALIZAR INFORMACION
route.put("/email", controller.updateEmail);

// ELIMINAR INFORMACION
route.delete("/email/:id", controller.deleteEmail);

export default route;
