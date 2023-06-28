// Modulos
import path from "path";
import dotenv from "dotenv";

// Configuración para que detecte los diferentes ambientes de desarrollo
dotenv.config({
    "path": path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});