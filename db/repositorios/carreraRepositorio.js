import { conexion } from "../conexionDB.js";
import { TABLE_CARRERA } from "../constants/constantes.js";

const crear = async () => {
  const connection = await conexion.clienteMySQL();
  try {
    // Verificar si ya existen carreras en la tabla 'carrera'
    const [existingRows] = await connection.query(`SELECT COUNT(*) as count FROM ${TABLE_CARRERA}`);
    const rowCount = existingRows[0].count;

    if (rowCount > 0) {
      // Si ya existen carreras, no es necesario volver a insertar
      return rowCount;
    }

    const nombresCarreras = [
      "Administración financiera",
      "Administración de negocios internacionales",
      "Gestión logística empresarial",
      "Ingeniería de software",
      "Administración turística y hotelera",
      "Diseño gráfico",
      "Diseño y administración de negocios de la moda",
      "Especialización Gestión pública"
    ];

    for (let i = 0; i < nombresCarreras.length; i++) {
      const carrera = {
        idCarrera: `${i + 1}`,
        nombre: nombresCarreras[i],
      }

      // Insertar carrera en la tabla 'carrera'
      await connection.query(`INSERT INTO ${TABLE_CARRERA} (idCarrera, nombre) VALUES (?, ?)`, [carrera.idCarrera, carrera.nombre]);
    }
    
  } catch (error) {
    throw error;

  } finally {
    connection.release();
  }
};

const buscarId = async (idCarrera) => {
  const connection = await conexion.clienteMySQL();
  try {
    // Buscar carrera por ID en la tabla 'carrera'
    const [rows] = await connection.query(`SELECT * FROM ${TABLE_CARRERA} WHERE idCarrera = ?`, [idCarrera]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw error;
  }
};

export default { crear, buscarId };