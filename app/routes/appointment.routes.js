import { Router } from "express";
import * as controller from "../controllers/appointment.controllers";

const routeAppointment = Router();

routeAppointment.get("/", (req, res) => {
    res.send(`<h1>Hola Mundo<h1>`);
});

// MUESTRA TODOS LOS REGISTROS
routeAppointment.get("/viewAppointment", controller.findAllAppointment);

// INSERTA INFO
routeAppointment.post("/saveAppointment", controller.insertAppointment);

// ACTUALIZAR INFORMACION
routeAppointment.put("/upAppointment", controller.updateAppointment);

// ELIMINAR INFORMACION
routeAppointment.delete("/deleAppointment/:id", controller.deleteAppointment);

export default routeAppointment;
