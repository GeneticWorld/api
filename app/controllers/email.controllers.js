import { pool } from "../config/dataBase/db.js"

// MOSTRAR TODOS LOS DATOS
export const findAllEmail = async(req, res) => {
    try {
        const [rows] = await pool.query("CALL spFindAllEmail()");
        res.json(rows);
    } catch (error) {
        console.error("Ha ocurrido un error");
        console.log(error);
    }
};

// MOSTRAR LOS DATOS SEGUN SU ID
export const findEmail = async(req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query(`CALL spFindEmail(${id});`);
        res.json(rows);
    } catch (error) {
        console.error("Ha ocurrido un error");
    }
};

// INSERTAR INFORMACION
export const insertEmail = async(req, res) => {
    const email = req.body.email;
    
    try {
        const result = await pool.query(`CALL spInsertEmail('${email}');`);
        res.json(result);
    } catch (error) {
        console.error("Ha ocurrido un error" + error);
    }
};

// ACTUALIZAR INFORMACION
export const updateEmail = async(req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    
    try {
        const result = await pool.query(`CALL spUpdateEmail(${id}, '${email}');`
            );
        if(result[0].affectedRows != 0)
            res.json(result);
        else
            res.json({"rs": "ERROR"})
    } catch (error) {
        console.error("Ha ocurrido un error" + error);
    }
};

export const deleteEmail = async(req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query(`CALL spDeleteEmail(${id});`)
        if (result[0].affectedRows == 1) 
            res.json(result);
        else
            res.json({"ERROR": "NO BORRÓ"})    
        
    } catch (error) {
        console.error(error);
    }
};