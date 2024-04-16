import evaluacionAprendizajeRepositorio from "../../db/repositorios/guiaAprendizaje/evaluacionAprendizajeRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { EvaluacionAprendizajeEntity } from "../../models/guiaAprendizaje/EvaluacionAprendizajeModelo.js";
import crypto from "crypto";

const crearEvaluacionAprendizaje = async (evaluacionAprendizaje)=> {

    if(!evaluacionAprendizaje.evidenciasAprendizaje || !evaluacionAprendizaje.tipo) {
        throw new Error("Datos vacios");
    }
    validarRol();

    evaluacionAprendizaje.idEa = crypto.randomUUID();

    await evaluacionAprendizajeRepositorio.crear(new EvaluacionAprendizajeEntity(evaluacionAprendizaje));

    return await evaluacionAprendizajeRepositorio.detalle(evaluacionAprendizaje.idEa);
}

const leerEvaluacionAprendizaje = async ()=> {
    return await evaluacionAprendizajeRepositorio.leer();
}

const detalleEvaluacionAprendizaje = async (idEa)=> {
    return await evaluacionAprendizajeRepositorio.detalle(idEa);
}

const actualizarCompetenciaUnidad = async (idEa, evaluacionAprendizaje)=> {

    if(!evaluacionAprendizaje.evidenciasAprendizaje || !evaluacionAprendizaje.tipo) {
        throw new Error("Datos vacios");
    }
    validarRol();

    const evaluacionAprendizajeDetalle = await evaluacionAprendizajeRepositorio.detalle(idEa);

    evaluacionAprendizajeDetalle.evidenciasAprendizaje = evaluacionAprendizaje.evidenciasAprendizaje;
    evaluacionAprendizajeDetalle.tipo = evaluacionAprendizaje.tipo;

    await evaluacionAprendizajeRepositorio.actualizar(evaluacionAprendizajeDetalle);

    return await evaluacionAprendizajeRepositorio.detalle(evaluacionAprendizajeDetalle.idEa);
}

const eliminarEvaluacionAprendizaje = async (idEa)=> {

    validarRol();
    const evaluacionAprendizajeDetalle = await evaluacionAprendizajeRepositorio.detalle(idEa);

    return await evaluacionAprendizajeRepositorio.eliminar(evaluacionAprendizajeDetalle.idEa);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente.");
    }
}

export default {crearEvaluacionAprendizaje, leerEvaluacionAprendizaje, detalleEvaluacionAprendizaje, actualizarCompetenciaUnidad, eliminarEvaluacionAprendizaje}