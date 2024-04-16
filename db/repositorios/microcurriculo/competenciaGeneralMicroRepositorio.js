import { conexion } from "../../conexionDB.js";
import { TABLE_COMPETENCIAGENERAL, TMC_IDCOMPETENCIAGENERAL } from "../../constants/constantes.js";

const crear = async (competenciaGeneral) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_COMPETENCIAGENERAL} SET ?`;
  await connection.query(query, competenciaGeneral);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT * FROM ${TABLE_COMPETENCIAGENERAL}`);
  connection.release();
  return rows;
}

const detalle = async (idCg) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_COMPETENCIAGENERAL} WHERE ${TMC_IDCOMPETENCIAGENERAL} = ?`;
  const [rows] = await connection.query(query, [idCg]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (competenciaGeneralDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = `UPDATE ${TABLE_COMPETENCIAGENERAL} SET ? WHERE ${TMC_IDCOMPETENCIAGENERAL} = ?`;
  await connection.query(query, [competenciaGeneralDetalle, competenciaGeneralDetalle.idCg]);
  connection.release();
}

const eliminar = async (idCg) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_COMPETENCIAGENERAL} WHERE ${TMC_IDCOMPETENCIAGENERAL} = ?`;
  await connection.query(query, [idCg]);
  connection.release();
}

export default {crear, leer, detalle, actualizar, eliminar}