import { conexion } from "../../conexionDB.js";
import { TABLE_COMOHACERLODEVUNIDAD, TGAC_IDCOMOHACERLODEVUNIDAD } from "../../constants/constantes.js";

const crear = async (comoHacerloDevUnidad)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_COMOHACERLODEVUNIDAD} SET ?`;
    await connection.query(query, comoHacerloDevUnidad);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT * FROM ${TABLE_COMOHACERLODEVUNIDAD}`);
    connection.release();
    return rows;
}

const detalle = async (idCh)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT * FROM ${TABLE_COMOHACERLODEVUNIDAD} WHERE ${TGAC_IDCOMOHACERLODEVUNIDAD} = ?`;
    const [rows] = await connection.query(query, [idCh]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (comoHacerloDevUnidadDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_COMOHACERLODEVUNIDAD} SET ? WHERE ${TGAC_IDCOMOHACERLODEVUNIDAD} = ?`;
    await connection.query(query, [comoHacerloDevUnidadDetalle, comoHacerloDevUnidadDetalle.idCh]);
    connection.release();
}

const eliminar = async (idCh)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_COMOHACERLODEVUNIDAD} WHERE ${TGAC_IDCOMOHACERLODEVUNIDAD} = ?`;
    await connection.query(query, [idCh]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}