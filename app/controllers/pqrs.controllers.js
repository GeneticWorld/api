// Modulos
import { pool } from "../config/dataBase/db.js";

// MOSTRAR TODOS LOS DATOS
export const findAllPQRS = async(req, res) => {
    try {
        const [rows] = await pool.query("CALL spFindAllPQRS();");
        res.json(rows);
    } catch (error) {
        console.error("Ha ocurrido un error: " + error);
    };
};

// MOSTRAR LOS DATOS SEGUN SU ID
export const findPQRS = async(req, res) => {
    const cedula = req.params.cedula;

    try {
        const [rows] = await pool.query(`CALL spFindPQRS(${cedula});`);
        res.json(rows);
    } catch (error) {
        console.error("Ha ocurrido un error: " + error);
    };
};

// INSERTAR INFORMACIÓN
export const insertPQRS = async(req, res) => {
    const cedula = req.body.cedula;
    const nombre_completo = req.body.nombre_completo;
    const descripcion = req.body.descripcion;
    
    try {
        const result = await pool.query(`CALL spInsertPQRS(${cedula}, '${nombre_completo}', '${descripcion}');`);
        res.json(result);
    } catch (error) {
        console.error("Ha ocurrido un error: " + error);
    };
};

// ACTUALIZAR INFORMACIÓN
export const updatePQRS = async(req, res) => {
    const id = req.body.id;
    const cedula = req.body.cedula;
    const nombre_completo = req.body.nombre_completo;
    const descripcion = req.body.descripcion;

    try {
        const result = await pool.query(`CALL spUpdatePQRS(${id}, ${cedula}, '${nombre_completo}', '${descripcion}');`
            );
        if(result[0].affectedRows != 0)
            res.json(result);
        else
            res.json({"rs": "ERROR"} + Error);
    } catch (error) {
        console.error("Ha ocurrido un error: " + error);
    };
};

// ELIMINA INFORMACIÓN
export const deletePQRS = async(req, res) => {
    const id = req.params.id;

    try {
        const result = await pool.query(`CALL spDeletePQRS(${id});`);
        if (result[0].affectedRows == 1) 
            res.json(result);
        else
            res.json({"ERROR": "NO BORRÓ"});   
    } catch (error) {
        console.error("Ha ocurrido un error: " + error);
    };
};