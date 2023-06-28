// Modulos
import { Router } from "express";
import * as controller from "../controllers/pqrs.controllers";

const route = Router();

// MUESTRA TODOS LOS REGISTROS
route.get("/pqrs", controller.findAllPQRS);

// MUESTRA SOLO 1 REGISTRO
route.get("/pqrs/:id", controller.findPQRS);

// INSERTA INFORMACIÓN
route.post("/pqrs", controller.insertPQRS);

// ACTUALIZA INFORMACIÓN
route.put("/pqrs", controller.updatePQRS);

// ELIMINA INFORMACIÓN
route.delete("/pqrs/:id", controller.deletePQRS);

export default route;