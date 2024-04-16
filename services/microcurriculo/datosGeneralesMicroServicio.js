import datosGeneralesMicroRepositorio from "../../db/repositorios/microcurriculo/datosGeneralesMicroRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { DatosGeneralesEntity } from "../../models/microcurriculo/DatosGeneralesMicroModelo.js";
import crypto from "crypto";

const crearDatoGeneral = async (datosGenerales) => {
  
  if (!datosGenerales.asignatura || !datosGenerales.programa || !datosGenerales.area ||
    !datosGenerales.semestre || !datosGenerales.metodologia || !datosGenerales.creditos ||
    !datosGenerales.horasPresenciales || !datosGenerales.horasTrabajoIndependiente ||
    !datosGenerales.totalHorasAsignatura) {
    throw new Error("Datos vacios");
  }

  validarRol();

  datosGenerales.idDg = crypto.randomUUID();

  await datosGeneralesMicroRepositorio.crear(new DatosGeneralesEntity(datosGenerales));

  return await datosGeneralesMicroRepositorio.detalle(datosGenerales.idDg);
}

const leerDatoGeneral = async () => {
  return await datosGeneralesMicroRepositorio.leer();
}

const detalleDatoGeneral = async (idDg) => {
  return await datosGeneralesMicroRepositorio.detalle(idDg);
}

const actualizarDatoGeneral = async (idDg, datosGenerales) => {
  
  if (!datosGenerales.asignatura || !datosGenerales.programa || !datosGenerales.area ||
    !datosGenerales.semestre || !datosGenerales.metodologia || !datosGenerales.creditos ||
    !datosGenerales.horasPresenciales || !datosGenerales.horasTrabajoIndependiente ||
    !datosGenerales.totalHorasAsignatura) {
    throw new Error("Datos vacios");
  }

  validarRol();

  const datosGeneralesDetalle = await datosGeneralesMicroRepositorio.detalle(idDg);

  datosGeneralesDetalle.asignatura = datosGenerales.asignatura;
  datosGeneralesDetalle.programa = datosGenerales.programa;
  datosGeneralesDetalle.area = datosGenerales.area;
  datosGeneralesDetalle.semestre = datosGenerales.semestre;
  datosGeneralesDetalle.metodologia = datosGenerales.metodologia;
  datosGeneralesDetalle.creditos = datosGenerales.creditos;
  datosGeneralesDetalle.horasPresenciales = datosGenerales.horasPresenciales;
  datosGeneralesDetalle.horasTrabajoIndependiente = datosGenerales.horasTrabajoIndependiente;
  datosGeneralesDetalle.totalHorasAsignatura = datosGenerales.totalHorasAsignatura;

  await datosGeneralesMicroRepositorio.actualizar(datosGeneralesDetalle);

  return await datosGeneralesMicroRepositorio.detalle(datosGeneralesDetalle.idDg);
}

const eliminarDatoGeneral = async (idDg) => {
  
  const datosGeneralesDetalle = await datosGeneralesMicroRepositorio.detalle(idDg);

  validarRol();

  return await datosGeneralesMicroRepositorio.eliminar(datosGeneralesDetalle.idDg);
}

const validarRol = async (idRol)=> {

  const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
  
  if(!usuarioRol) {
      throw new Error("Accion denegada. Requiere del rol del director.");
  }
}

export default {crearDatoGeneral, leerDatoGeneral, detalleDatoGeneral, actualizarDatoGeneral, eliminarDatoGeneral}