import { Router } from "express";
import * as controller from "../controllers/pqrs.controllers";

const route = Router();

route.get("/", (req, res) => {
    res.send(`<h1>Hola Mundo<h1>`);
});

// MUESTRA TODOS LOS REGISTROS
route.get("/pqrs", controller.findAllPQRS);

// MUESTRA SOLO 1 REGISTRO
route.get("/pqrs/:id", controller.findPQRS);

// INSERTA INFO
route.post("/pqrs", controller.insertPQRS);

// ACTUALIZAR INFORMACION
route.put("/pqrs", controller.updatePQRS);

// ELIMINAR INFORMACION
route.delete("/pqrs/:id", controller.deletePQRS);

export default route;