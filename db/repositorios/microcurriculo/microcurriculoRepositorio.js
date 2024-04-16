import { conexion } from "../../conexionDB.js";
import { TABLE_MICROCURRICULO, TABLE_USUARIOMICROCURRICULO, TABLE_USUARIO, TABLE_DATOGENERAL, TABLE_COMPETENCIAGENERAL,
TABLE_ARTICULACIONSABER, TABLE_CONOCIMIENTOPREVIO, TABLE_UNIDAD, TABLE_CONTENIDOTEMATICO, TABLE_BIBLIOGRAFIAMICROCURRICULO,
TABLE_LECTURABASICA, TABLE_LECTURACOMPLEMENTARIA, TMC_IDARTICULACIONSABER, TMC_IDBIBLIOGRAFIA, TMC_IDCOMPETENCIAGENERAL,
TMC_IDCONOCIMIENTOPREVIO, TMC_IDUNIDAD, TMC_IDDATOGENERAL, TMC_IDMICROCURRICULO, TUC_IDUSUARIO, TMC_FECHACREADO } from "../../constants/constantes.js";

const crear = async (microcurriculo) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_MICROCURRICULO} SET ?`;
  await connection.query(query, microcurriculo);
  connection.release();
}

const crearUsuarioMicrocurriculo = async (usuarioMicrocurriculo) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_USUARIOMICROCURRICULO} SET ?`;
  await connection.query(query, usuarioMicrocurriculo);
  connection.release();
}

const leer = async () => {
  const connection = await conexion.clienteMySQL();
  const [rows] = await connection.query(`SELECT * FROM ${TABLE_MICROCURRICULO} AS m JOIN ${TABLE_USUARIOMICROCURRICULO} AS um ON m.${TMC_IDMICROCURRICULO} = um.${TMC_IDMICROCURRICULO} JOIN ${TABLE_USUARIO} AS user ON um.${TUC_IDUSUARIO} = user.${TUC_IDUSUARIO} JOIN ${TABLE_DATOGENERAL} AS dg ON m.${TMC_IDDATOGENERAL} = dg.${TMC_IDDATOGENERAL} JOIN ${TABLE_COMPETENCIAGENERAL} AS cg ON m.${TMC_IDCOMPETENCIAGENERAL} = cg.${TMC_IDCOMPETENCIAGENERAL} JOIN ${TABLE_ARTICULACIONSABER} AS asm ON m.${TMC_IDARTICULACIONSABER} = asm.${TMC_IDARTICULACIONSABER} JOIN ${TABLE_CONOCIMIENTOPREVIO} AS cp ON m.${TMC_IDCONOCIMIENTOPREVIO} = cp.${TMC_IDCONOCIMIENTOPREVIO} JOIN ${TABLE_UNIDAD} AS u ON m.${TMC_IDUNIDAD} = u.${TMC_IDUNIDAD} JOIN ${TABLE_CONTENIDOTEMATICO} AS ctm ON u.${TMC_IDUNIDAD} = ctm.${TMC_IDUNIDAD} JOIN ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bmc ON m.${TMC_IDBIBLIOGRAFIA} = bmc.${TMC_IDBIBLIOGRAFIA} JOIN ${TABLE_LECTURABASICA} AS lb ON bmc.${TMC_IDBIBLIOGRAFIA} = lb.${TMC_IDBIBLIOGRAFIA} JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bmc.${TMC_IDBIBLIOGRAFIA} = lc.${TMC_IDBIBLIOGRAFIA} ORDER BY ${TMC_FECHACREADO} DESC LIMIT 20`);
  connection.release();
  return rows;
}

const detalle = async (idMc) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_MICROCURRICULO} AS m JOIN ${TABLE_USUARIOMICROCURRICULO} AS um ON m.${TMC_IDMICROCURRICULO} = um.${TMC_IDMICROCURRICULO} JOIN ${TABLE_USUARIO} AS user ON um.${TUC_IDUSUARIO} = user.${TUC_IDUSUARIO} JOIN ${TABLE_DATOGENERAL} AS dg ON m.${TMC_IDDATOGENERAL} = dg.${TMC_IDDATOGENERAL} JOIN ${TABLE_COMPETENCIAGENERAL} AS cg ON m.${TMC_IDCOMPETENCIAGENERAL} = cg.${TMC_IDCOMPETENCIAGENERAL} JOIN ${TABLE_ARTICULACIONSABER} AS asm ON m.${TMC_IDARTICULACIONSABER} = asm.${TMC_IDARTICULACIONSABER} JOIN ${TABLE_CONOCIMIENTOPREVIO} AS cp ON m.${TMC_IDCONOCIMIENTOPREVIO} = cp.${TMC_IDCONOCIMIENTOPREVIO} JOIN ${TABLE_UNIDAD} AS u ON m.${TMC_IDUNIDAD} = u.${TMC_IDUNIDAD} JOIN ${TABLE_CONTENIDOTEMATICO} AS ctm ON u.${TMC_IDUNIDAD} = ctm.${TMC_IDUNIDAD} JOIN ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bmc ON m.${TMC_IDBIBLIOGRAFIA} = bmc.${TMC_IDBIBLIOGRAFIA} JOIN ${TABLE_LECTURABASICA} AS lb ON bmc.${TMC_IDBIBLIOGRAFIA} = lb.${TMC_IDBIBLIOGRAFIA} JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bmc.${TMC_IDBIBLIOGRAFIA} = lc.${TMC_IDBIBLIOGRAFIA} WHERE m.${TMC_IDMICROCURRICULO} = ?`;
  const [rows] = await connection.query(query, [idMc]);
  connection.release();
  return rows[0] || {};
}

const detalleMicrocurriculo = async (idUn) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_MICROCURRICULO} WHERE ${TMC_IDMICROCURRICULO} = ?`;
  const [rows] = await connection.query(query, [idUn]);
  connection.release();
  return rows[0] || {};
}

const detalleUsuarioMirocurriculo = async (idUsuario)=> {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT ${TUC_IDUSUARIO} FROM ${TABLE_USUARIOMICROCURRICULO}`;
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows[0] || {};
}

const actualizar = async (microcurriculoDetalle) => {
  const connection = await conexion.clienteMySQL();
  const query = `UPDATE ${TABLE_MICROCURRICULO} SET ? WHERE ${TMC_IDMICROCURRICULO} = ?`;
  await connection.query(query, [microcurriculoDetalle, microcurriculoDetalle.idMc]);
  connection.release();
}

const eliminar = async (idMc) => {
  const connection = await conexion.clienteMySQL();
  const query = `DELETE FROM ${TABLE_MICROCURRICULO} WHERE ${TMC_IDMICROCURRICULO} = ?`;
  await connection.query(query, [idMc]);
  connection.release();
}

const misMicrocurriculos = async (idUsuario) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_MICROCURRICULO} AS m JOIN ${TABLE_USUARIOMICROCURRICULO} AS um ON m.${TMC_IDMICROCURRICULO} = um.${TMC_IDMICROCURRICULO} JOIN ${TABLE_USUARIO} AS user ON um.${TUC_IDUSUARIO} = user.${TUC_IDUSUARIO} JOIN ${TABLE_DATOGENERAL} AS dg ON m.${TMC_IDDATOGENERAL} = dg.${TMC_IDDATOGENERAL} JOIN ${TABLE_COMPETENCIAGENERAL} AS cg ON m.${TMC_IDCOMPETENCIAGENERAL} = cg.${TMC_IDCOMPETENCIAGENERAL} JOIN ${TABLE_ARTICULACIONSABER} AS asm ON m.${TMC_IDARTICULACIONSABER} = asm.${TMC_IDARTICULACIONSABER} JOIN ${TABLE_CONOCIMIENTOPREVIO} AS cp ON m.${TMC_IDCONOCIMIENTOPREVIO} = cp.${TMC_IDCONOCIMIENTOPREVIO} JOIN ${TABLE_UNIDAD} AS u ON m.${TMC_IDUNIDAD} = u.${TMC_IDUNIDAD} JOIN ${TABLE_CONTENIDOTEMATICO} AS ctm ON u.${TMC_IDUNIDAD} = ctm.${TMC_IDUNIDAD} JOIN ${TABLE_BIBLIOGRAFIAMICROCURRICULO} AS bmc ON m.${TMC_IDBIBLIOGRAFIA} = bmc.${TMC_IDBIBLIOGRAFIA} JOIN ${TABLE_LECTURABASICA} AS lb ON bmc.${TMC_IDBIBLIOGRAFIA} = lb.${TMC_IDBIBLIOGRAFIA} JOIN ${TABLE_LECTURACOMPLEMENTARIA} AS lc ON bmc.${TMC_IDBIBLIOGRAFIA} = lc.${TMC_IDBIBLIOGRAFIA} WHERE um.${TUC_IDUSUARIO} = ? ORDER BY ${TMC_FECHACREADO} DESC LIMIT 20`;
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows || [];
}

const buscarIdMicrocurriculo = async (idMc)=> {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT ${TMC_IDMICROCURRICULO} FROM ${TABLE_MICROCURRICULO}`;
  const [rows] = await connection.query(query, [idMc]);
  connection.release();
  return rows[0] || null;
}

export default {crear, crearUsuarioMicrocurriculo, leer, detalle, detalleUsuarioMirocurriculo,
  detalleMicrocurriculo, actualizar, eliminar, misMicrocurriculos, buscarIdMicrocurriculo}