import { conexion } from "../../conexionDB.js";
import { TABLE_GLOSARIOLEXICO, TGAC_IDGLOSARIOLEXICO } from "../../constants/constantes.js";

const crear = async (glosario)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_GLOSARIOLEXICO} SET ?`;
    await connection.query(query, glosario);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT idGl, palabras FROM ${TABLE_GLOSARIOLEXICO}`);
    connection.release();
    return rows;
}

const detalle = async (idGl)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT idGl, palabras FROM ${TABLE_GLOSARIOLEXICO} WHERE ${TGAC_IDGLOSARIOLEXICO} = ?`;
    const [rows] = await connection.query(query, [idGl]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (glosarioDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_GLOSARIOLEXICO} SET ? WHERE ${TGAC_IDGLOSARIOLEXICO} = ?`;
    await connection.query(query, [glosarioDetalle, glosarioDetalle.idGl]);
    connection.release();
}

const eliminar = async (idGl)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_GLOSARIOLEXICO} WHERE ${TGAC_IDGLOSARIOLEXICO} = ?`;
    await connection.query(query, [idGl]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}