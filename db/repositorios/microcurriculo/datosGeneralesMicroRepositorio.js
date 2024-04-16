import { conexion } from "../../conexionDB.js";
import { TABLE_DATOGENERAL, TMC_IDDATOGENERAL } from "../../constants/constantes.js";

const crear = async (datosGenerales) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_DATOGENERAL} SET ?`;
  await connection.query(query, datosGenerales);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT * FROM ${TABLE_DATOGENERAL}`);
  connection.release();
  return rows;
}

const detalle = async (idDg) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_DATOGENERAL} WHERE ${TMC_IDDATOGENERAL} = ?`;
  const [rows] = await connection.query(query, [idDg]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (datosGeneralesDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = `UPDATE ${TABLE_DATOGENERAL} SET ? WHERE ${TMC_IDDATOGENERAL} = ?`;
  await connection.query(query, [datosGeneralesDetalle, datosGeneralesDetalle.idDg]);
  connection.release();
}

const eliminar = async (idDg) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_DATOGENERAL} WHERE ${TMC_IDDATOGENERAL} = ?`;
  await connection.query(query, [idDg]);
  connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}