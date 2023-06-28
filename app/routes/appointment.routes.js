// Modulos
import { Router } from "express";
import * as controller from "../controllers/appointment.controllers";

const routeAppointment = Router();

// MUESTRA TODOS LOS REGISTROS
routeAppointment.get("/viewAppointment", controller.findAllAppointment);

// INSERTA INFORMACIÓN 
routeAppointment.post("/saveAppointment", controller.insertAppointment);

// ACTUALIZA INFORMACIÓN
routeAppointment.put("/upAppointment", controller.updateAppointment);

// ELIMINA INFORMACIÓN
routeAppointment.delete("/deleAppointment/:id", controller.deleteAppointment);

export default routeAppointment;