import { Router } from "express";
import * as controller from "../controllers/appointment.controllers";

const routeAppointment = Router();

routeAppointment.get("/", (req, res) => {
    res.send(`<h1>Hola Mundo<h1>`);
});

// MUESTRA TODOS LOS REGISTROS
routeAppointment.get("/viewAppointment", controller.findAllAppointment);

// MUESTRA SOLO 1 REGISTRO
routeAppointment.get("/email/:id", controller.findEmail);

// INSERTA INFO
routeAppointment.post("/email", controller.insertEmail);

// ACTUALIZAR INFORMACION
routeAppointment.put("/email", controller.updateEmail);

// ELIMINAR INFORMACION
routeAppointment.delete("/email/:id", controller.deleteEmail);

export default routeAppointment;
