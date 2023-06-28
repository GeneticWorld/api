// Modulos
import { Router } from "express";
import * as controller from "../controllers/email.controllers";

const route = Router();

// MUESTRA TODOS LOS REGISTROS
route.get("/email", controller.findAllEmail);

// MUESTRA SOLO 1 REGISTRO
route.get("/email/:id", controller.findEmail);

// INSERTA INFORMACIÓN
route.post("/email", controller.insertEmail);

// ACTUALIZA INFORMACIÓN
route.put("/email", controller.updateEmail);

// ELIMINA INFORMACIÓN
route.delete("/email/:id", controller.deleteEmail);

export default route;