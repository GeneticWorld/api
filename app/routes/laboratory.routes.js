//Modulos
import { Router } from "express";
import * as controller from "../controllers/laboratory.controllers";

const route = Router();

// MUESTRA TODOS LOS REGISTROS
route.get("/laboratory", controller.findAllLaboratory);

// MUESTRA SOLO 1 REGISTRO
route.get("/laboratory/:id", controller.findLaboratory);

// INSERTA INFORMACIÓN
route.post("/laboratory", controller.insertLaboratory);

// ACTUALIZA INFORMACIÓN
route.put("/laboratory", controller.updateLaboratory);

// ELIMINA INFORMACIÓN
route.delete("/laboratory/:id", controller.deleteLaboratory);

export default route;