import instrumentosEvaluacionRepositorio from "../../db/repositorios/guiaAprendizaje/instrumentosEvaluacionRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { InstrumentosEvaluacionEntity } from "../../models/guiaAprendizaje/InstrumentosEvaluacionModelo.js";
import crypto from "crypto";

const crearInstrumentosEvaluacion = async (instrumentosEvaluacion)=> {

    if(!instrumentosEvaluacion.instrumento || !instrumentosEvaluacion.idEa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    instrumentosEvaluacion.idIea = crypto.randomUUID();

    await instrumentosEvaluacionRepositorio.crear(new InstrumentosEvaluacionEntity(instrumentosEvaluacion));

    return await instrumentosEvaluacionRepositorio.detalle(instrumentosEvaluacion.idIea);
}

const leerInstrumentosEvaluacion = async ()=> {
    return await instrumentosEvaluacionRepositorio.leer();
}

const detalleInstrumentosEvaluacion = async (idIea)=> {
    return await instrumentosEvaluacionRepositorio.detalle(idIea);
}

const actualizarInstrumentosEvaluacion = async (idIea, instrumentosEvaluacion)=> {

    if(!instrumentosEvaluacion.instrumento || !instrumentosEvaluacion.idEa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    const instrumentosEvaluacionDetalle = await instrumentosEvaluacionRepositorio.detalle(idIea);

    instrumentosEvaluacionDetalle.instrumento = instrumentosEvaluacion.instrumento;
    instrumentosEvaluacionDetalle.idEa = instrumentosEvaluacion.idEa;

    await instrumentosEvaluacionRepositorio.actualizar(instrumentosEvaluacionDetalle);

    return await instrumentosEvaluacionRepositorio.detalle(instrumentosEvaluacionDetalle.idIea);
}

const eliminarInstrumentosEvaluacion = async (idIea)=> {

    validarRol();
    const instrumentosEvaluacionDetalle = await instrumentosEvaluacionRepositorio.detalle(idIea);

    return await instrumentosEvaluacionRepositorio.eliminar(instrumentosEvaluacionDetalle.idIea);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente.");
    }
}

export default {crearInstrumentosEvaluacion, leerInstrumentosEvaluacion, detalleInstrumentosEvaluacion, actualizarInstrumentosEvaluacion, eliminarInstrumentosEvaluacion}