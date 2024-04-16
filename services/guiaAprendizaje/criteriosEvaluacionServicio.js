import criteriosEvaluacionRepositorio from "../../db/repositorios/guiaAprendizaje/criteriosEvaluacionRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { CriteriosEvaluacionEntity } from "../../models/guiaAprendizaje/CriteriosEvaluacionModelo.js";
import crypto from "crypto";

const crearCriteriosEvaluacion = async (criteriosEvaluacion)=> {

    if(!criteriosEvaluacion.criterio || !criteriosEvaluacion.idEa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    criteriosEvaluacion.idCea = crypto.randomUUID();

    await criteriosEvaluacionRepositorio.crear(new CriteriosEvaluacionEntity(criteriosEvaluacion));

    return await criteriosEvaluacionRepositorio.detalle(criteriosEvaluacion.idCea);
}

const leerCriteriosEvaluacion = async ()=> {
    return await criteriosEvaluacionRepositorio.leer();
}

const detalleCriteriosEvaluacion = async (idCea)=> {
    return await criteriosEvaluacionRepositorio.detalle(idCea);
}

const actualizarCriteriosEvaluacion = async (idCea, criteriosEvaluacion)=> {

    if(!criteriosEvaluacion.criterio || !criteriosEvaluacion.idEa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    const criteriosEvaluacionDetalle = await criteriosEvaluacionRepositorio.detalle(idCea);

    criteriosEvaluacionDetalle.criterio = criteriosEvaluacion.criterio;
    criteriosEvaluacionDetalle.idEa = criteriosEvaluacion.idEa;

    await criteriosEvaluacionRepositorio.actualizar(criteriosEvaluacionDetalle);

    return await criteriosEvaluacionRepositorio.detalle(criteriosEvaluacionDetalle.idCea);
}

const eliminarCriteriosEvaluacion = async (idCea)=> {

    validarRol();
    const criteriosEvaluacionDetalle = await criteriosEvaluacionRepositorio.detalle(idCea);

    return await criteriosEvaluacionRepositorio.eliminar(criteriosEvaluacionDetalle.idCea);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente.");
    }
}

export default {crearCriteriosEvaluacion, leerCriteriosEvaluacion, detalleCriteriosEvaluacion, actualizarCriteriosEvaluacion, eliminarCriteriosEvaluacion}