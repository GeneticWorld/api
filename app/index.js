// Modulos
import app from "./app.js";
import caseEntorno from "./config";

// Se escucha el puerto
app.listen(app.get("PORT"), caseEntorno);