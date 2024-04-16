import { conexion } from "../../conexionDB.js";
import { TABLE_LECTURACOMPLEMENTARIA, TMC_IDLECTURACOMPLEMENTARIA, TLCC_REFERENCIA } from "../../constants/constantes.js";

const crear = async (lecturaComplementaria)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_LECTURACOMPLEMENTARIA} SET ?`;
    await connection.query(query, lecturaComplementaria);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT ${TMC_IDLECTURACOMPLEMENTARIA}, ${TLCC_REFERENCIA} FROM ${TABLE_LECTURACOMPLEMENTARIA}`);
    connection.release();
    return rows;
}

const detalle = async (idLc)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT ${TMC_IDLECTURACOMPLEMENTARIA}, ${TLCC_REFERENCIA} FROM ${TABLE_LECTURACOMPLEMENTARIA} WHERE ${TMC_IDLECTURACOMPLEMENTARIA} = ?`;
    const [rows] = await connection.query(query, [idLc]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (lecturaComplementariaDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_LECTURACOMPLEMENTARIA} SET ? WHERE ${TMC_IDLECTURACOMPLEMENTARIA} = ?`;
    await connection.query(query, [lecturaComplementariaDetalle, lecturaComplementariaDetalle.idLc]);
    connection.release();
}

const eliminar = async (idLc)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_LECTURACOMPLEMENTARIA} WHERE ${TMC_IDLECTURACOMPLEMENTARIA} = ?`;
    await connection.query(query, [idLc]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}