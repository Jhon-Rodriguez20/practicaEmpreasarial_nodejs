import { conexion } from "../../conexionDB.js";
import { TABLE_INDICADORDESEMPENO, TGAC_IDINDICADORDESEMPENO } from "../../constants/constantes.js";

const crear = async (indicadoresDesempeno)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_INDICADORDESEMPENO} SET ?`;
    await connection.query(query, indicadoresDesempeno);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT * FROM ${TABLE_INDICADORDESEMPENO}`);
    connection.release();
    return rows;
}

const detalle = async (idCeu)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT idId, saberSaber, saberHacer, saberSer FROM ${TABLE_INDICADORDESEMPENO} WHERE ${TGAC_IDINDICADORDESEMPENO} = ?`;
    const [rows] = await connection.query(query, [idCeu]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (indicadoresDesempenoDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_INDICADORDESEMPENO} SET ? WHERE ${TGAC_IDINDICADORDESEMPENO} = ?`;
    await connection.query(query, [indicadoresDesempenoDetalle, indicadoresDesempenoDetalle.idId]);
    connection.release();
}

const eliminar = async (idId)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_INDICADORDESEMPENO} WHERE ${TGAC_IDINDICADORDESEMPENO} = ?`;
    await connection.query(query, [idId]);
    connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}