// Modulo
import { createPool } from "mysql2/promise";

// Conexión a la base de datos
export const pool = createPool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME
});