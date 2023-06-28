-- Creación base de datos
CREATE DATABASE agendador COLLATE "UTF8_GENERAL_CI";

-- Tabla citas
CREATE TABLE citas (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cedula INT(11) NOT NULL,
    nombre VARCHAR(250) NOT NULL,
    apellido VARCHAR(250) NOT  NULL,
    telefono VARCHAR(250) NOT NULL,
    direccion VARCHAR(250) NOT NULL,
    correo VARCHAR(250) NOT NULL,
    idLab INT(11) NOT NULL,
    fecha VARCHAR(250) NOT NULL,
    horaCita VARCHAR(250) NOT NULL,
    costoCita VARCHAR(250) NOT NULL,
    FOREIGN KEY (idLab) REFERENCES laboratories (id)
);

-- Tabla emails
CREATE TABLE emails (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(250) NOT NULL
);

-- Tabla laboratories
CREATE TABLE laboratories (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    laboratory VARCHAR(250) NOT NULL
);

-- Tabla pqrs
CREATE TABLE pqrs (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    CEDULA INT(11) NOT NULL,
    nombre_completo VARCHAR(250) NOT NULL,
    descripcion VARCHAR(250) NOT NULL
);

-- PROCEDIMIENTOS ALMACENADOS DE LA TABLA CITAS

-- INSERTA INFORMACIÓN A LA TABLA CITAS

CREATE PROCEDURE `spInsertAppointment`(IN `_cedula` INT(11), IN `_nombre` VARCHAR(250), IN `_apellido` VARCHAR(250), IN `_telefono` VARCHAR(250), IN `_direccion` VARCHAR(250), IN `_correo` VARCHAR(250), IN `_idLab` INT(11), IN `_fecha` VARCHAR(250), IN `_horaCita` VARCHAR(250), IN `_costoCita` VARCHAR(250))
BEGIN
	INSERT INTO citas(cedula, nombre, apellido, telefono, direccion, correo, idLab, fecha, horaCita, costoCita) VALUES (_cedula, _nombre, _apellido, _telefono, _direccion, _correo, _idLab, _fecha, _horaCita, _costoCita);
END

CALL spInsertAppointment();

-- MUESTRA TODOS LOS DATOS DE LA TABLA CITAS

CREATE PROCEDURE `spFindAllAppointment`()
BEGIN
SELECT b.id, b.cedula, b.nombre, b.apellido, b.telefono, b.direccion, b.correo, a.laboratory, b.fecha, b.horaCita, b.costoCita FROM citas b INNER JOIN laboratories a ON b.idLab = a.id;
END

CALL spFindAllAppointment();

-- MUESTRA LA INFORMACIÓN POR MEDIO DEL ID

CREATE PROCEDURE `spFindAppointment`(IN `_id` INT(11)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    SELECT cedula, nombre, apellido, telefono, direccion, correo, idLab, fecha, horaCita, costoCita FROM citas WHERE id = _id; 
END

CALL spFindAppointment(1);

-- ACTUALIZAR INFORMACIÓN DE LA TABLA CITAS

CREATE PROCEDURE `spUpdateAppointment`(IN `_id` INT(11), IN `_cedula` INT(11), IN `_nombre` VARCHAR(250), IN `_apellido` VARCHAR(250), IN `_telefono` VARCHAR(250), IN `_direccion` VARCHAR(250), IN `_correo` VARCHAR(250), IN `_idLab` INT(11), IN `_fecha` VARCHAR(250), IN `_horaCita` VARCHAR(250), IN `_costoCita` VARCHAR(250))
BEGIN
   UPDATE citas SET cedula = _cedula, nombre = _nombre,
    apellido = _apellido, telefono = _telefono, direccion = _direccion, correo = _correo, idLab = _idLab, fecha = _fecha, horaCita = _horaCita, costoCita = _costoCita WHERE id = _id;
END

CALL spUpdateAppointment();

-- ELIMINAR INFORMACÓN DE LA TABLA CITAS

CREATE PROCEDURE `spDeleteAppointment`(IN `_id` INT(11))
BEGIN
	DELETE FROM citas WHERE id = _id;
END

CALL spDeleteAppointment(1);

-- PROCEDIMIENTOS ALMACENADOS DE LA TABLA EMAILS

-- INSERTAR INFORMACIÓN EN LA TABLA EMAILS
CREATE PROCEDURE `spInsertEmail`(IN `_email` VARCHAR(250))
BEGIN
	INSERT INTO emails (email) VALUES 
    (_email);
END

CALL spInsertEmail("digitar correo");

-- MUESTRA TODA LA INFORMACION DE LA TABLA EMAILS
CREATE PROCEDURE `spFindAllEmail`()
BEGIN
	SELECT id, email FROM emails;
END

CALL spFindAllEmail();

--MUESTRA EL DATO SEGUN SU ID
CREATE PROCEDURE `spFindEmail`(IN `_id` INT(11))
BEGIN 
  SELECT id, email FROM emails WHERE id = _id;
END

CALL spFindEmail(1);

-- ACTUALIZA LA INFORMACIÓN DE LA TABLA EMAILS
CREATE PROCEDURE `spUpdateEmail`(IN `_id` INT(11), IN `_email` VARCHAR(250))
BEGIN
	UPDATE emails SET email = _email WHERE id = _id;
END

CALL spUpdateEmail();

-- ELIMINA LA INFORMACION SEGUN EL ID
CREATE PROCEDURE `spDeleteEmail`(IN `_id` INT(11))
BEGIN
	DELETE FROM emails WHERE id = _id;
END

CALL spDeleteEmail(1);

-- PROCEDIMIENTOS ALMACENADOS DE LA TABLA LABORATORIES

-- INSERTA INFORMACIÓN EN LA TABLA LABORATORIES
CREATE PROCEDURE `spInsertLaboratory`(IN `_laboratory` VARCHAR(250))
BEGIN
	INSERT INTO laboratories (laboratory) VALUES 
    (_laboratory);
END

CALL spInsertLaboratory("HOLA MUNDO");

-- MUESTRA TODA LA INFORMACIÓN DE LA TABLA LABORATORIES
CREATE PROCEDURE `spFindAllLaboratory`()
BEGIN
	SELECT id, laboratory FROM laboratories;
END

CALL spFindAllLaboratory();

-- MUESTRA INFORMACIÓN SEGÚN SU ID
CREATE PROCEDURE `spFindLaboratory`(IN `_id` INT(11))
BEGIN 
  SELECT id, laboratory FROM laboratories WHERE id = _id;
END

CALL spFindLaboratory(1);

-- ACTUALIZA LA INFORMACIÓN DE LA TABLA LABORATORIES
CREATE PROCEDURE `spUpdateLaboratory`(IN `_id` INT(11), IN `_laboratory` VARCHAR(250))
BEGIN
	UPDATE laboratories SET  laboratory = _laboratory WHERE id = _id;
END

CALL spUpdateLaboratory(1);

-- ELIMINA INFORMACIÓN DE LA TBALA LABORATORIES
CREATE PROCEDURE `spDeleteLaboratory`(IN `_id` INT(11))
BEGIN
	DELETE FROM laboratories WHERE id = _id;
END

CALL spDeleteLaboratory(1);

-- PROCEDIMIENTOS ALMACENADOS DE LA TABLA PQRS

-- INSERTA INFORMACIÓN EN LA TABLA PQRS
CREATE PROCEDURE `spInsertPQRS`(IN `_cedula` INT(11), IN `_nombre_completo` VARCHAR(250), IN `_descripcion` VARCHAR(250))
BEGIN
	INSERT INTO pqrs (cedula, nombre_completo, descripcion) VALUES 
    (_cedula, _nombre_completo, _descripcion);
END

CALL spInsertPQRS(123456789, "Sebas", "Buena atención");

-- MUESTRA TODA LA INFORMACIÓN DE LA TABLA PQRS
CREATE PROCEDURE `spFindAllPQRS`()
BEGIN
	SELECT cedula, nombre_completo, descripcion FROM pqrs;
END

CALL spFindAllPQRS();

-- MUESTRA LA INFORMACIÓN SEGÚN SU ID
CREATE PROCEDURE `spFindPQRS`(IN `_id` INT(11))
BEGIN 
  SELECT cedula, nombre_completo, descripcion FROM pqrs WHERE id = _id;
END

CALL spFindPQRS();

-- ACTUALIZA LA INFORMACIÓN DE LA TABLA PQRS
CREATE PROCEDURE `spUpdatePQRS`(IN `_id` INT(11), IN `_cedula` INT(11), IN `_nombre_completo` VARCHAR(250), IN `_descripcion` VARCHAR(250))
BEGIN
	UPDATE pqrs SET cedula = _cedula, nombre_completo = _nombre_completo,
    descripcion = _descripcion WHERE id = _id;
END

CALL spUpdatePQRS();

-- ELIMINA LA INFORMACIÓN DE LA TABLA PQRS
CREATE PROCEDURE `spDeletePQRS`(IN `_id` INT(11))
BEGIN
	DELETE FROM pqrs WHERE id = _id;
END

CALL spDeletePQRS();