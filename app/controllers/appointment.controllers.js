import { pool } from "../config/dataBase/db.js"

// MOSTRAR TODOS LOS DATOS
export const findAllAppointment = async(req, res) => {
    try {
        const [rows] = await pool.query("CALL spFindAllAppointment()");
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
export const insertAppointment = async(req, res) => {
    const cedula = req.body.cedula;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const correo = req.body.correo;
    const idLab = req.body.idLab;
    const fecha = req.body.fecha;
    const horaCita = req.body.horaCita;
    const costoCita = req.body.costoCita;
    
    try {
        const result = await pool.query(`CALL spInsertAppointment(${cedula}, '${nombre}', '${apellido}', '${telefono}', '${direccion}', '${correo}', ${idLab}, '${fecha}', '${horaCita}', '${costoCita}');`);
        res.json(result);
    } catch (error) {
        console.error("Ha ocurrido un error" + error);
    }
};

// ACTUALIZAR INFORMACION
export const updateAppointment = async(req, res) => {
    const id = req.body.id;
    const cedula = req.body.cedula;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const correo = req.body.correo;
    const idLab = req.body.idLab;
    const fecha = req.body.fecha;
    const horaCita = req.body.horaCita;
    const costoCita = req.body.costoCita;
    
    try {
        const result = await pool.query(`CALL spUpdateAppointment(${id}, ${cedula}, '${nombre}', '${apellido}', '${telefono}', '${direccion}', '${correo}', ${idLab}, '${fecha}', '${horaCita}', '${costoCita}');`
            );
        if(result[0].affectedRows != 0)
            res.json(result);
        else
            res.json({"rs": "ERROR"})
    } catch (error) {
        console.error("Ha ocurrido un error" + error);
    }
};

export const deleteAppointment = async(req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query(`CALL spDeleteAppointment(${id});`)
        if (result[0].affectedRows == 1) 
            res.json(result);
        else
            res.json({"ERROR": "NO BORRÓ"})    
        
    } catch (error) {
        console.error(error);
    }
};