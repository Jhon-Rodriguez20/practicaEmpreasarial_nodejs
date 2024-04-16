import { conexion } from "../../conexionDB.js";
import { TABLE_GUIAAPRENDIZAJE, TABLE_USUARIOGUIAAPRENDIZAJE, TABLE_USUARIO, TABLE_PRESENTACIONGUIA,
TABLE_EVALUACIONAPRENDIZAJE, TABLE_MICROCURRICULOGUIAAPRENDIZAJE, TABLE_MICROCURRICULO,
TABLE_DATOGENERAL, TABLE_UNIDAD, TABLE_COMPETENCIAGENERAL, TABLE_INDICADORDESEMPENO,
TABLE_DESARROLLOUNIDADAPRENDIZAJE, TABLE_COMOHACERLODEVUNIDAD, TABLE_CRITERIOEVALUACION,
TABLE_INSTRUMENTOEVALUACION, TABLE_BIBLIOGRAFIAGUIA, TABLE_GLOSARIOLEXICO } from "../../constants/constantes.js";

const crear = async (guiaAprendizaje)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_GUIAAPRENDIZAJE} SET ?`;
    await connection.query(query, guiaAprendizaje);
    connection.release();
}

const crearUsuarioGuiaAprendizaje = async (usuarioGuiaAprendizaje)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_USUARIOGUIAAPRENDIZAJE} SET ?`;
    await connection.query(query, usuarioGuiaAprendizaje);
    connection.release();
}

const crearMicrocurriculoGuiaAprendizaje = async (microcurriculoGuiaAprendizaje)=> {
    const connection = await conexion.clienteMySQL();
    const query = `INSERT INTO ${TABLE_MICROCURRICULOGUIAAPRENDIZAJE} SET ?`;
    await connection.query(query, microcurriculoGuiaAprendizaje);
    connection.release();
}

const leer = async()=> {
    const connection = await conexion.clienteMySQL();
    const [rows] = await connection.query(`SELECT * FROM ${TABLE_GUIAAPRENDIZAJE} AS ga JOIN ${TABLE_USUARIOGUIAAPRENDIZAJE} AS uga ON ga.idGa = uga.idGa JOIN ${TABLE_USUARIO} AS us ON uga.idUsuario = us.idUsuario JOIN ${TABLE_PRESENTACIONGUIA} AS ptga ON ga.idPt = ptga.idPt JOIN ${TABLE_EVALUACIONAPRENDIZAJE} AS eva ON ga.idEa = eva.idEa JOIN ${TABLE_MICROCURRICULOGUIAAPRENDIZAJE} AS mga ON ga.idGa = mga.idGa JOIN ${TABLE_MICROCURRICULO} AS m ON m.idMc = mga.idMc JOIN ${TABLE_DATOGENERAL} AS dgm ON m.idDg = dgm.idDg JOIN ${TABLE_UNIDAD} AS und ON m.idUn = und.idUn JOIN ${TABLE_COMPETENCIAGENERAL} AS cgm ON m.idCg = cgm.idCg JOIN ${TABLE_INDICADORDESEMPENO} AS idg ON ga.idGa = idg.idGa JOIN ${TABLE_DESARROLLOUNIDADAPRENDIZAJE} AS duga ON ga.idGa = duga.idGa JOIN ${TABLE_COMOHACERLODEVUNIDAD} AS chdun ON duga.idDua = chdun.idDua JOIN ${TABLE_CRITERIOEVALUACION} AS ceg ON eva.idEa = ceg.idEa JOIN ${TABLE_INSTRUMENTOEVALUACION} AS iga ON eva.idEa = iga.idEa JOIN ${TABLE_BIBLIOGRAFIAGUIA} AS biga ON ga.idGa = biga.idGa JOIN ${TABLE_GLOSARIOLEXICO} AS glga ON ga.idGa = glga.idGa ORDER BY fechaCreada DESC LIMIT 20`);
    connection.release();
    return rows;
}

const detalle = async (idGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT * FROM ${TABLE_GUIAAPRENDIZAJE} AS ga JOIN ${TABLE_USUARIOGUIAAPRENDIZAJE} AS uga ON ga.idGa = uga.idGa JOIN ${TABLE_USUARIO} AS us ON uga.idUsuario = us.idUsuario JOIN ${TABLE_PRESENTACIONGUIA} AS ptga ON ga.idPt = ptga.idPt JOIN ${TABLE_EVALUACIONAPRENDIZAJE} AS eva ON ga.idEa = eva.idEa JOIN ${TABLE_MICROCURRICULOGUIAAPRENDIZAJE} AS mga ON ga.idGa = mga.idGa JOIN ${TABLE_MICROCURRICULO} AS m ON m.idMc = mga.idMc JOIN ${TABLE_DATOGENERAL} AS dgm ON m.idDg = dgm.idDg JOIN ${TABLE_UNIDAD} AS und ON m.idUn = und.idUn JOIN ${TABLE_COMPETENCIAGENERAL} AS cgm ON m.idCg = cgm.idCg JOIN ${TABLE_INDICADORDESEMPENO} AS idg ON ga.idGa = idg.idGa JOIN ${TABLE_DESARROLLOUNIDADAPRENDIZAJE} AS duga ON ga.idGa = duga.idGa JOIN ${TABLE_COMOHACERLODEVUNIDAD} AS chdun ON duga.idDua = chdun.idDua JOIN ${TABLE_CRITERIOEVALUACION} AS ceg ON eva.idEa = ceg.idEa JOIN ${TABLE_INSTRUMENTOEVALUACION} AS iga ON eva.idEa = iga.idEa JOIN ${TABLE_BIBLIOGRAFIAGUIA} AS biga ON ga.idGa = biga.idGa JOIN ${TABLE_GLOSARIOLEXICO} AS glga ON ga.idGa = glga.idGa WHERE ga.idGa = ?`;
    const [rows] = await connection.query(query, [idGa]);
    connection.release();
    return rows[0] || {};
}

const detalleGuiaAprendizaje = async (idGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT * FROM ${TABLE_GUIAAPRENDIZAJE} WHERE idGa = ?`;
    const [rows] = await connection.query(query, [idGa]);
    connection.release();
    return rows[0] || {};
}

const detalleUsuarioGuiaAprendizaje = async (idUsuario)=> {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT idUsuario FROM ${TABLE_USUARIOGUIAAPRENDIZAJE}`;
    const [rows] = await connection.query(query, [idUsuario]);
    connection.release();
    return rows[0] || {};
}

const actualizar = async (guiaAprendizajeDetalle)=> {
    const connection = await conexion.clienteMySQL();
    const query = `UPDATE ${TABLE_GUIAAPRENDIZAJE} SET ? WHERE idGa = ?`;
    await connection.query(query, [guiaAprendizajeDetalle, guiaAprendizajeDetalle.idGa]);
    connection.release();
}

const eliminar = async (idGa)=> {
    const connection = await conexion.clienteMySQL();
    const query = `DELETE FROM ${TABLE_GUIAAPRENDIZAJE} WHERE idGa = ?`;
    await connection.query(query, [idGa]);
    connection.release();
}

const misGuiasAprendizaje = async (idUsuario) => {
    const connection = await conexion.clienteMySQL();
    const query = `SELECT * FROM ${TABLE_GUIAAPRENDIZAJE} AS ga JOIN ${TABLE_USUARIOGUIAAPRENDIZAJE} AS uga ON ga.idGa = uga.idGa JOIN ${TABLE_USUARIO} AS us ON uga.idUsuario = us.idUsuario JOIN ${TABLE_PRESENTACIONGUIA} AS ptga ON ga.idPt = ptga.idPt JOIN ${TABLE_EVALUACIONAPRENDIZAJE} AS eva ON ga.idEa = eva.idEa JOIN ${TABLE_MICROCURRICULOGUIAAPRENDIZAJE} AS mga ON ga.idGa = mga.idGa JOIN ${TABLE_MICROCURRICULO} AS m ON m.idMc = mga.idMc JOIN ${TABLE_DATOGENERAL} AS dgm ON m.idDg = dgm.idDg JOIN ${TABLE_UNIDAD} AS und ON m.idUn = und.idUn JOIN ${TABLE_COMPETENCIAGENERAL} AS cgm ON m.idCg = cgm.idCg JOIN ${TABLE_INDICADORDESEMPENO} AS idg ON ga.idGa = idg.idGa JOIN ${TABLE_DESARROLLOUNIDADAPRENDIZAJE} AS duga ON ga.idGa = duga.idGa JOIN ${TABLE_COMOHACERLODEVUNIDAD} AS chdun ON duga.idDua = chdun.idDua JOIN ${TABLE_CRITERIOEVALUACION} AS ceg ON eva.idEa = ceg.idEa JOIN ${TABLE_INSTRUMENTOEVALUACION} AS iga ON eva.idEa = iga.idEa JOIN ${TABLE_BIBLIOGRAFIAGUIA} AS biga ON ga.idGa = biga.idGa JOIN ${TABLE_GLOSARIOLEXICO} AS glga ON ga.idGa = glga.idGa WHERE uga.idUsuario = ? ORDER BY fechaCreada DESC LIMIT 20`;
    const [rows] = await connection.query(query, [idUsuario]);
    connection.release();
    return rows || [];
}

export default {crear, crearUsuarioGuiaAprendizaje, crearMicrocurriculoGuiaAprendizaje, leer, detalle,
     detalleGuiaAprendizaje, detalleUsuarioGuiaAprendizaje, actualizar, eliminar, misGuiasAprendizaje}