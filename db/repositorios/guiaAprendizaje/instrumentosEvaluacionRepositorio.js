import { conexion } from "../../conexionDB.js";
import { TABLE_INSTRUMENTOEVALUACION, TGAC_IDINSTRUMENTOEVALUACION } from "../../constants/constantes.js";

const crear = async (instrumentosEvaluacion)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_INSTRUMENTOEVALUACION} SET ?`;
    await connection.query(query, instrumentosEvaluacion);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT * FROM ${TABLE_INSTRUMENTOEVALUACION}`);
    connection.release();
    return rows;
}

const detalle = async (idCea)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT * FROM ${TABLE_INSTRUMENTOEVALUACION} WHERE ${TGAC_IDINSTRUMENTOEVALUACION} = ?`;
    const [rows] = await connection.query(query, [idCea]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (instrumentosEvaluacionDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_INSTRUMENTOEVALUACION} SET ? WHERE ${TGAC_IDINSTRUMENTOEVALUACION} = ?`;
    await connection.query(query, [instrumentosEvaluacionDetalle, instrumentosEvaluacionDetalle.idIea]);
    connection.release();
}

const eliminar = async (idIea)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_INSTRUMENTOEVALUACION} WHERE ${TGAC_IDINSTRUMENTOEVALUACION} = ?`;
    await connection.query(query, [idIea]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}