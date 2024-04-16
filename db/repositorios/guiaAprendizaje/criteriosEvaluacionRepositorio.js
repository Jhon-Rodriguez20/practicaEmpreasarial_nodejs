import { conexion } from "../../conexionDB.js";
import { TABLE_CRITERIOEVALUACION, TGAC_IDCRITERIOEVALUACION } from "../../constants/constantes.js";

const crear = async (criteriosEvaluacion)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_CRITERIOEVALUACION} SET ?`;
    await connection.query(query, criteriosEvaluacion);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT * FROM ${TABLE_CRITERIOEVALUACION}`);
    connection.release();
    return rows;
}

const detalle = async (idCea)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT * FROM ${TABLE_CRITERIOEVALUACION} WHERE ${TGAC_IDCRITERIOEVALUACION} = ?`;
    const [rows] = await connection.query(query, [idCea]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (criteriosEvaluacionDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_CRITERIOEVALUACION} SET ? WHERE ${TGAC_IDCRITERIOEVALUACION} = ?`;
    await connection.query(query, [criteriosEvaluacionDetalle, criteriosEvaluacionDetalle.idCea]);
    connection.release();
}

const eliminar = async (idCea)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_CRITERIOEVALUACION} WHERE ${TGAC_IDCRITERIOEVALUACION} = ?`;
    await connection.query(query, [idCea]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}