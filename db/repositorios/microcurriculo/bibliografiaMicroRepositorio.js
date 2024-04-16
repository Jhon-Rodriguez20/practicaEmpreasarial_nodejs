import { conexion } from "../../conexionDB.js";
import { TABLE_BIBLIOGRAFIAMICROCURRICULO, TABLE_LECTURABASICA, TABLE_LECTURACOMPLEMENTARIA,
TMC_IDBIBLIOGRAFIA } from "../../constants/constantes.js";

const crear = async (bibliografiaMicrocurriculo) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_BIBLIOGRAFIAMICROCURRICULO} SET ?`;
  await connection.query(query, bibliografiaMicrocurriculo);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT * FROM ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bgm JOIN ${TABLE_LECTURABASICA} AS lb ON bgm.${TMC_IDBIBLIOGRAFIA} = lb.${TMC_IDBIBLIOGRAFIA} JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bgm.${TMC_IDBIBLIOGRAFIA} = lc.${TMC_IDBIBLIOGRAFIA}`);
  connection.release();
  return rows;
}

const detalle = async (idBg) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bgm JOIN ${TABLE_LECTURABASICA} AS lb ON bgm.${TMC_IDBIBLIOGRAFIA} = lb.${TMC_IDBIBLIOGRAFIA} JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bgm.${TMC_IDBIBLIOGRAFIA} = lc.${TMC_IDBIBLIOGRAFIA} WHERE bgm.${TMC_IDBIBLIOGRAFIA} = ?`;
  const [rows] = await connection.query(query, [idBg]);
  connection.release();
  return rows[0] || {};
}

const detalleBibliografia = async (idBg) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT ${TMC_IDBIBLIOGRAFIA} FROM ${TABLE_BIBLIOGRAFIAMICROCURRICULO} WHERE ${TMC_IDBIBLIOGRAFIA} = ?`;
  const [rows] = await connection.query(query, [idBg]);
  connection.release();
  return rows[0] || {};
}

const eliminar = async (idBg) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_BIBLIOGRAFIAMICROCURRICULO} WHERE ${TMC_IDBIBLIOGRAFIA} = ?`;
  await connection.query(query, [idBg]);
  connection.release();
}
 

export default {crear, leer, detalle, detalleBibliografia, eliminar}