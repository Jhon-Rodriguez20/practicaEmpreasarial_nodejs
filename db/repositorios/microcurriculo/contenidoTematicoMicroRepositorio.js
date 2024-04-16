import { conexion } from "../../conexionDB.js";
import { TABLE_CONTENIDOTEMATICO, TMC_IDCONTENIDOTEMATICO } from "../../constants/constantes.js";

const crear = async (contenidoTematico) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_CONTENIDOTEMATICO} SET ?`;
  await connection.query(query, contenidoTematico);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT * FROM ${TABLE_CONTENIDOTEMATICO}`);
  connection.release();
  return rows;
}

const detalle = async (idCt) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_CONTENIDOTEMATICO} WHERE ${TMC_IDCONTENIDOTEMATICO} = ?`;
  const [rows] = await connection.query(query, [idCt]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (contenidoTematicoDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = `UPDATE ${TABLE_CONTENIDOTEMATICO} SET ? WHERE ${TMC_IDCONTENIDOTEMATICO} = ?`;
  await connection.query(query, [contenidoTematicoDetalle, contenidoTematicoDetalle.idCt]);
  connection.release();
}

const eliminar = async (idCt) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_CONTENIDOTEMATICO} WHERE ${TMC_IDCONTENIDOTEMATICO} = ?`;
  await connection.query(query, [idCt]);
  connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}