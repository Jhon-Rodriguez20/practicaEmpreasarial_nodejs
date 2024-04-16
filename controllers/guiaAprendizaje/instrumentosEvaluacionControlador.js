import respuestasHttp from "../../utils/respuestasHttp.js";
import instrumentosEvaluacionServicio from "../../services/guiaAprendizaje/instrumentosEvaluacionServicio.js";
import { InstrumentosEvaluacionCrearReqModel, InstrumentosEvaluacionDatosResModel, InstrumentosEvaluacionActualizarReqModel } from "../../models/guiaAprendizaje/InstrumentosEvaluacionModelo.js";

const postInstrumentosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const instrumentosEvaluacion = await instrumentosEvaluacionServicio.crearInstrumentosEvaluacion(new InstrumentosEvaluacionCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new InstrumentosEvaluacionDatosResModel(instrumentosEvaluacion), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear el instrumento de evaluacion", err, 400);
    }
}

const getInstrumentosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await instrumentosEvaluacionServicio.leerInstrumentosEvaluacion();
            const losInstrumentosEvaluacion = array.map(instrumentosEvaluacion => new InstrumentosEvaluacionDatosResModel(instrumentosEvaluacion));
            respuestasHttp.exito(req, res, losInstrumentosEvaluacion, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer los instrumentos de evaluacion", err, 400);
    }
}

const getDetalleInstrumentosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const instrumentosEvaluacion = await instrumentosEvaluacionServicio.detalleInstrumentosEvaluacion(req.params.id);
            respuestasHttp.exito(req, res, new InstrumentosEvaluacionDatosResModel(instrumentosEvaluacion), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle del instrumento de evaluacion", err, 400);
    }
}

const putInstrumentosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const instrumentosEvaluacion = await instrumentosEvaluacionServicio.actualizarInstrumentosEvaluacion(req.params.id, new InstrumentosEvaluacionActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new InstrumentosEvaluacionDatosResModel(instrumentosEvaluacion), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar el instrumento de evaluacion", err, 400);
    }
}

const deleteInstrumentosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await instrumentosEvaluacionServicio.eliminarInstrumentosEvaluacion(req.params.id);
            respuestasHttp.exito(req, res, "Instrumento de evaluacion eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar el instrumento de evaluacion", err, 400);
    }
}

export default {postInstrumentosEvaluacion, getInstrumentosEvaluacion, getDetalleInstrumentosEvaluacion, putInstrumentosEvaluacion, deleteInstrumentosEvaluacion}