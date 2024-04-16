import { conexion } from "../../conexionDB.js";
import { TABLE_LECTURABASICA, TMC_IDLECTURABASICA, TLBC_REFERENCIA } from "../../constants/constantes.js";

const crear = async (lecturaBasica)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_LECTURABASICA} SET ?`;
    await connection.query(query, lecturaBasica);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT ${TMC_IDLECTURABASICA}, ${TLBC_REFERENCIA} FROM ${TABLE_LECTURABASICA}`);
    connection.release();
    return rows;
}

const detalle = async (idLb)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT ${TMC_IDLECTURABASICA}, ${TLBC_REFERENCIA} FROM ${TABLE_LECTURABASICA} WHERE ${TMC_IDLECTURABASICA} = ?`;
    const [rows] = await connection.query(query, [idLb]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (lecturaBasicaDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_LECTURABASICA} SET ? WHERE ${TMC_IDLECTURABASICA} = ?`;
    await connection.query(query, [lecturaBasicaDetalle, lecturaBasicaDetalle.idLb]);
    connection.release();
}

const eliminar = async (idLb)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_LECTURABASICA} WHERE ${TMC_IDLECTURABASICA} = ?`;
    await connection.query(query, [idLb]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}