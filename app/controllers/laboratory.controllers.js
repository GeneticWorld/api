import { pool } from "../config/dataBase/db.js"

// MOSTRAR TODOS LOS DATOS
export const findAllLaboratory = async(req, res) => {
    try {
        const [rows] = await pool.query("CALL spFindAllLaboratory()");
        res.json(rows);
    } catch (error) {
        console.error("Ha ocurrido un error");
        console.log(error);
    }
};

// MOSTRAR LOS DATOS SEGUN SU ID
export const findLaboratory = async(req, res) => {
    const id = req.params.id;

    try {
        const [rows] = await pool.query(`CALL spFindLaboratory(${id})`);
        res.json(rows);
    } catch (error) {
        console.error("Ha ocurrido un error");
        console.log(error);
    }
};

// INSERTAR INFORMACION
export const insertLaboratory = async(req, res) => {
    const laboratory = req.body.laboratory;
    
    try {
        const result = await pool.query(`CALL spInsertLaboratory('${laboratory}');`);
        res.json(result);
    } catch (error) {
        console.error("Ha ocurrido un error" + error);
    }
};

// ACTUALIZAR INFORMACION
export const updateLaboratory = async(req, res) => {
    const id = req.body.id;
    const laboratory = req.body.laboratory;
    
    try {
        const result = await pool.query(`CALL spUpdateLaboratory(${id}, '${laboratory}');`
            );
        if(result[0].affectedRows != 0)
            res.json(result);
        else
            res.json({"rs": "ERROR"})
    } catch (error) {
        console.error("Ha ocurrido un error" + error);
    }
};

export const deleteLaboratory = async(req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query(`CALL spDeleteLaboratory(${id});`)
        if (result[0].affectedRows == 1) 
            res.json(result);
        else
            res.json({"ERROR": "NO BORRÓ"})    
        
    } catch (error) {
        console.error(error);
    }
};