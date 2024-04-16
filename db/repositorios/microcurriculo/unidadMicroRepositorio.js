import { conexion } from "../../conexionDB.js";
import { TABLE_UNIDAD, TABLE_CONTENIDOTEMATICO, TMC_IDUNIDAD, TMC_IDCONTENIDOTEMATICO,
TCTC_COMPETENCIAESPECIFICA, TCTC_SUBTEMA, TCTC_TEMA, TCTC_TITULO } from "../../constants/constantes.js";

const crear = async (unidad) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_UNIDAD} SET ?`;
  await connection.query(query, unidad);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT ${TABLE_UNIDAD}.${TMC_IDUNIDAD}, ${TABLE_UNIDAD}.${TCTC_TITULO}, ${TABLE_UNIDAD}.${TCTC_COMPETENCIAESPECIFICA}, ${TABLE_CONTENIDOTEMATICO}.${TMC_IDCONTENIDOTEMATICO}, ${TABLE_CONTENIDOTEMATICO}.${TCTC_TEMA}, ${TABLE_CONTENIDOTEMATICO}.${TCTC_SUBTEMA} FROM ${TABLE_UNIDAD} INNER JOIN ${TABLE_CONTENIDOTEMATICO} ON ${TABLE_UNIDAD}.${TMC_IDUNIDAD} = ${TABLE_CONTENIDOTEMATICO}.${TMC_IDUNIDAD}`);
  connection.release();
  return rows;
}

const detalle = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT ${TABLE_UNIDAD}.${TMC_IDUNIDAD}, ${TABLE_UNIDAD}.${TCTC_TITULO}, ${TABLE_UNIDAD}.${TCTC_COMPETENCIAESPECIFICA}, ${TABLE_CONTENIDOTEMATICO}.${TMC_IDCONTENIDOTEMATICO}, ${TABLE_CONTENIDOTEMATICO}.${TCTC_TEMA}, ${TABLE_CONTENIDOTEMATICO}.${TCTC_SUBTEMA} FROM ${TABLE_UNIDAD} INNER JOIN ${TABLE_CONTENIDOTEMATICO} ON ${TABLE_UNIDAD}.${TMC_IDUNIDAD} = ${TABLE_CONTENIDOTEMATICO}.${TMC_IDUNIDAD} WHERE ${TABLE_UNIDAD}.${TMC_IDUNIDAD} = ?`;
  const [rows] = await connection.query(query, [idUn]);
  connection.release();
  return rows[0] || {};
}

const detalleUnidad = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_UNIDAD} WHERE ${TMC_IDUNIDAD} = ?`;
  const [rows] = await connection.query(query, [idUn]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (unidadDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = `UPDATE ${TABLE_UNIDAD} SET ? WHERE ${TMC_IDUNIDAD} = ?`;
  await connection.query(query, [unidadDetalle, unidadDetalle.idUn]);
  connection.release();
}

const eliminar = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_UNIDAD} WHERE ${TMC_IDUNIDAD} = ?`;
  await connection.query(query, [idUn]);
  connection.release();
}

export default {crear, leer, detalle, detalleUnidad, actualizar, eliminar}