import { conexion } from "../../db/conexionDB.js";
import microcurriculoRepositorio from "../../db/repositorios/microcurriculo/microcurriculoRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { MicrocurriculoEntity } from "../../models/microcurriculo/MicrocurriculoModelo.js";
import { UsuarioMicrocurriculoEntity } from "../../models/UsuarioModelo.js";
import crypto from "crypto";

const crearMicrocurriculo = async (microcurriculo, idUsuario) => {
    
    if (!microcurriculo.idDg || !microcurriculo.idCg || !microcurriculo.idAs ||
      !microcurriculo.idCp || !microcurriculo.idUn || !microcurriculo.idBg) {
      throw new Error("Datos vacios o incorrectos");
    }
  
    validarRol();
  
    const microcurriculoEntity = new MicrocurriculoEntity(microcurriculo);
    microcurriculoEntity.idMc = crypto.randomUUID();
    microcurriculoEntity.fechaCreado = new Date();
  
    const usuarioEntity = new UsuarioMicrocurriculoEntity({
      idUsuario: idUsuario,
      idMc: microcurriculoEntity.idMc
    });
  
    const connection = await conexion.clienteMySQL();
  
    try {

      await connection.beginTransaction();
      await microcurriculoRepositorio.crear(microcurriculoEntity);
      await microcurriculoRepositorio.crearUsuarioMicrocurriculo(usuarioEntity);
      await connection.commit();
  
      return await microcurriculoRepositorio.detalle(microcurriculoEntity.idMc, usuarioEntity.idUsuario);

    } catch (err) {
      await connection.rollback();
      throw err;
    }
}

const leerMicrocurriculo = async ()=> {
    return await microcurriculoRepositorio.leer();
}

const detalleMicrocurriculo = async (idMc)=> {
    return await microcurriculoRepositorio.detalle(idMc);
}

const actualizarMicrocurriculo = async (idMc, microcurriculo, idUsuario)=> {

    if(!microcurriculo.idDg || !microcurriculo.idCg || !microcurriculo.idAs ||
        !microcurriculo.idCp || !microcurriculo.idUn || !microcurriculo.idBg) {
        throw new Error("Datos vacios o incorrectos");
    }

    validarRol();

    const microcurriculoDetalle = await microcurriculoRepositorio.detalleMicrocurriculo(idMc);
    const usuarioMicrocurriculo = await microcurriculoRepositorio.detalleUsuarioMirocurriculo(idUsuario);

    if(usuarioMicrocurriculo.idUsuario != idUsuario) {
        throw new Error("No se puede actualizar el microcurriculo");
    }

    microcurriculoDetalle.idDg = microcurriculo.idDg;
    microcurriculoDetalle.idCg = microcurriculo.idCg;
    microcurriculoDetalle.idAs = microcurriculo.idAs;
    microcurriculoDetalle.idCp = microcurriculo.idCp;
    microcurriculoDetalle.idUn = microcurriculo.idUn;
    microcurriculoDetalle.idBg = microcurriculo.idBg;

    await microcurriculoRepositorio.actualizar(microcurriculoDetalle);

    return await microcurriculoRepositorio.detalle(microcurriculoDetalle.idMc);
}

const eliminarMicrocurriculo = async (idMc, idUsuario)=> {

    const microcurriculoDetalle = await microcurriculoRepositorio.detalleMicrocurriculo(idMc);
    const usuarioMicrocurriculo = await microcurriculoRepositorio.detalleUsuarioMirocurriculo(idUsuario);

    if(usuarioMicrocurriculo.idUsuario != idUsuario) {
        throw new Error("No se puede eliminar el microcurriculo");
    }

    validarRol();

    return await microcurriculoRepositorio.eliminar(microcurriculoDetalle.idMc);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del director");
    }
}

export default {crearMicrocurriculo, leerMicrocurriculo, detalleMicrocurriculo, actualizarMicrocurriculo, eliminarMicrocurriculo}