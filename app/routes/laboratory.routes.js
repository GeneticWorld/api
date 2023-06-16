import { Router } from "express";
import * as controller from "../controllers/laboratory.controllers";

const route = Router();

route.get("/", (req, res) => {
    res.send(`<h1>Hola Mundo<h1>`);
});

// MUESTRA TODOS LOS REGISTROS
route.get("/laboratory", controller.findAllLaboratory);

// MUESTRA SOLO 1 REGISTRO
route.get("/laboratory/:id", controller.findLaboratory);

// INSERTA INFO
route.post("/laboratory", controller.insertLaboratory);

// ACTUALIZAR INFORMACION
route.put("/laboratory", controller.updateLaboratory);

// ELIMINAR INFORMACION
route.delete("/laboratory/:id", controller.deleteLaboratory);

export default route;
