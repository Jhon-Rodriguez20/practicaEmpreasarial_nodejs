import { conexion } from "../conexionDB.js";
import { TABLE_USUARIO, TABLE_USUARIOCARRERA, TABLE_USUARIOROL, TABLE_ROL, TABLE_CARRERA,
TUC_EMAIL, TUC_IDCARRERA, TUC_IDROL, TUC_IDUSUARIO, TUC_USERNAME } from "../constants/constantes.js";

const crear = async (usuario) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_USUARIO} SET ?`;
  await connection.query(query, usuario);
  connection.release();
}

const asignarCarreraUsuario = async (usuarioCarrera) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_USUARIOCARRERA} SET ?`;
  await connection.query(query, usuarioCarrera);
  connection.release();
}

const asignarRolUsuario = async (usuarioRol) => {
  const connection = await conexion.clienteMySQL();
  const query = `INSERT INTO ${TABLE_USUARIOROL} SET ?`;
  await connection.query(query, usuarioRol);
  connection.release();
}

const buscarUsername = async (username) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_USUARIO} WHERE ${TUC_USERNAME} = ?`;
  const [rows] = await connection.query(query, [username]);
  connection.release();
  return rows[0] || null;
}

const buscarUsuario = async (username) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_USUARIO} AS user JOIN ${TABLE_USUARIOROL} AS usrol ON user.${TUC_IDUSUARIO} = usrol.${TUC_IDUSUARIO} JOIN ${TABLE_ROL} AS rol ON usrol.${TUC_IDROL} = rol.${TUC_IDROL} WHERE ${TUC_USERNAME} = ?`;
  const [rows] = await connection.query(query, [username]);
  connection.release();
  return rows[0] || null;
}

const buscarEmail = async (email) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT ${TUC_EMAIL} FROM ${TABLE_USUARIO} WHERE ${TUC_EMAIL} = ?`;
  const [rows] = await connection.query(query, [email]);
  connection.release();
  return rows[0] || null;
}

const buscarByIdUsuario = async (idUsuario) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_USUARIO} WHERE ${TUC_IDUSUARIO} = ?`;
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows[0] || null;
}

const buscarId = async (idUsuario) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT ${TUC_IDUSUARIO} FROM ${TABLE_USUARIO} WHERE ${TUC_IDUSUARIO} = ?`;
  const [rows] = await connection.query(query, [idUsuario]);
  connection.release();
  return rows.length > 0 ? rows[0] : null;
}

const buscarNombreRol = async (rol) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_USUARIO} AS user JOIN ${TABLE_USUARIOROL} AS usrol ON user.${TUC_IDUSUARIO} = usrol.${TUC_IDUSUARIO} JOIN ${TABLE_ROL} AS rol ON usrol.${TUC_IDROL} = rol.${TUC_IDROL}`;
  const [rows] = await connection.query(query, [rol]);
  connection.release();
  return rows[0] || {};
}

const buscarNombreCarrera = async (carrera) => {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT * FROM ${TABLE_USUARIO} AS user JOIN ${TABLE_USUARIOCARRERA} AS uscarrera ON user.${TUC_IDUSUARIO} = uscarrera.${TUC_IDUSUARIO} JOIN ${TABLE_CARRERA} AS carrera ON uscarrera.${TUC_IDCARRERA} = carrera.${TUC_IDCARRERA}`;
  const [rows] = await connection.query(query, [carrera]);
  connection.release();
  return rows[0] || {};
}

const buscarRolDirector = async (idRol)=> {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT ${TUC_IDROL} FROM ${TABLE_USUARIOROL} WHERE ${TUC_IDROL} = '2'`;
  const [rows] = await connection.query(query, [idRol]);
  connection.release();
  return rows[0] || null;
}

const buscarRolDocente = async (idRol)=> {
  const connection = await conexion.clienteMySQL();
  const query = `SELECT ${TUC_IDROL} FROM ${TABLE_USUARIOROL} WHERE ${TUC_IDROL} = '3'`;
  const [rows] = await connection.query(query, [idRol]);
  connection.release();
  return rows[0] || null;
}

export default { crear, buscarEmail, buscarId, buscarUsername, buscarUsuario, buscarByIdUsuario, asignarCarreraUsuario, asignarRolUsuario,
   buscarRolDirector, buscarRolDocente, buscarNombreRol, buscarNombreCarrera }