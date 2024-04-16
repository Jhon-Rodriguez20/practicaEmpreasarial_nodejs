import { conexion } from "../../db/conexionDB.js";
import guiaprendizajeRepositorio from "../../db/repositorios/guiaAprendizaje/guiaprendizajeRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import microcurriculoRepositorio from "../../db/repositorios/microcurriculo/microcurriculoRepositorio.js"
import { GuiaprendizajeEntity, MicrocurriculoGuiaAprendizajeCrearReqModel } from "../../models/guiaAprendizaje/GuiaprendizajeModelo.js";
import { UsuarioGuiaAprendizajeEntity } from "../../models/UsuarioModelo.js";
import crypto from "crypto";

const crearGuiaAprendizaje = async (guiaAprendizaje, idUsuario, idMc)=> {

    if(!guiaAprendizaje.idPt || !guiaAprendizaje.idEa) {
        throw new Error("Datos vacios");
    }

    validarRol();

    const guiaAprendizajeEntity = new GuiaprendizajeEntity(guiaAprendizaje);
    guiaAprendizajeEntity.idGa = crypto.randomUUID();
    guiaAprendizajeEntity.fechaCreada = new Date();

    const microcurriculo = await microcurriculoRepositorio.buscarIdMicrocurriculo(idMc);
    
    const usuarioGuiaAprendizajeEntity = new UsuarioGuiaAprendizajeEntity({
        idUsuario: idUsuario,
        idGa: guiaAprendizajeEntity.idGa
    });

    const microcurriculoGuiaEntity = new MicrocurriculoGuiaAprendizajeCrearReqModel({
        idMc: microcurriculo.idMc,
        idGa: guiaAprendizajeEntity.idGa
    });

    const connection = await conexion.clienteMySQL();

    try {
        await connection.beginTransaction();
        await guiaprendizajeRepositorio.crear(guiaAprendizajeEntity);
        await guiaprendizajeRepositorio.crearUsuarioGuiaAprendizaje(usuarioGuiaAprendizajeEntity);
        await guiaprendizajeRepositorio.crearMicrocurriculoGuiaAprendizaje(microcurriculoGuiaEntity);
        await connection.commit();

        return await guiaprendizajeRepositorio.detalleGuiaAprendizaje(guiaAprendizajeEntity.idGa, usuarioGuiaAprendizajeEntity.idUsuario, microcurriculoGuiaEntity.idGa);

    } catch (err) {
        await connection.rollback();
        throw err;
    }
}

const leerGuiaAprendizaje = async ()=> {
    return await guiaprendizajeRepositorio.leer();
}

const detalleGuiaAprendizaje = async (idGa)=> {
    return await guiaprendizajeRepositorio.detalle(idGa);
}

const actualizarGuiaAprendizaje = async (idGa, guiaAprendizaje, idUsuario)=> {

    if(!guiaAprendizaje.idPt || !guiaAprendizaje.idEa) {
        throw new Error("Datos vacios");
    }

    validarRol();

    const guiaAprendizajeDetalle = await guiaprendizajeRepositorio.detalleGuiaAprendizaje(idGa);
    const usuarioGuiaAprendizaje = await guiaprendizajeRepositorio.detalleUsuarioGuiaAprendizaje(idUsuario);

    if(usuarioGuiaAprendizaje.idUsuario != idUsuario) {
        throw new Error("No se puede actualizar la guia de aprendizaje");
    }

    guiaAprendizajeDetalle.idPt = guiaAprendizaje.idPt;
    guiaAprendizajeDetalle.idEa = guiaAprendizaje.idEa;

    await guiaprendizajeRepositorio.actualizar(guiaAprendizajeDetalle);

    return await guiaprendizajeRepositorio.detalle(guiaAprendizajeDetalle.idGa);
}

const eliminarGuiaAprendizaje = async (idGa, idUsuario)=> {

    const guiaAprendizajeDetalle = await guiaprendizajeRepositorio.detalleGuiaAprendizaje(idGa);
    const usuarioGuiaAprendizaje = await guiaprendizajeRepositorio.detalleUsuarioGuiaAprendizaje(idUsuario);

    if(usuarioGuiaAprendizaje.idUsuario != idUsuario) {
        throw new Error("No se puede actualizar la guia de aprendizaje");
    }

    validarRol();

    return await guiaprendizajeRepositorio.eliminar(guiaAprendizajeDetalle.idGa);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente");
    }
}

export default {crearGuiaAprendizaje, leerGuiaAprendizaje, detalleGuiaAprendizaje, actualizarGuiaAprendizaje, eliminarGuiaAprendizaje}