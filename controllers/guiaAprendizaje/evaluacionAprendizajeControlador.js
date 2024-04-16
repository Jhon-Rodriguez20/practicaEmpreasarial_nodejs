import respuestasHttp from "../../utils/respuestasHttp.js";
import evaluacionAprendizajeServicio from "../../services/guiaAprendizaje/evaluacionAprendizajeServicio.js";
import { EvaluacionAprendizajeCrearReqModel, EvaluacionAprendizajeDatosResModel, EvaluacionAprendizajeActualizarReqModel } from "../../models/guiaAprendizaje/EvaluacionAprendizajeModelo.js";

const postEvaluacionAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const evaluacionAprendizaje = await evaluacionAprendizajeServicio.crearEvaluacionAprendizaje(new EvaluacionAprendizajeCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new EvaluacionAprendizajeDatosResModel(evaluacionAprendizaje), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la evaluacion de aprendizaje", err, 400);
    }
}

const getEvaluacionAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await evaluacionAprendizajeServicio.leerEvaluacionAprendizaje();
            const lasEvaluacionesAprendizajes = array.map(evaluacionAprendizaje=> new EvaluacionAprendizajeDatosResModel(evaluacionAprendizaje));
            respuestasHttp.exito(req, res, lasEvaluacionesAprendizajes, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las evaluaciones de aprendizajes", err, 400);
    }
}

const getDetalleEvaluacionAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const evaluacionAprendizaje = await evaluacionAprendizajeServicio.detalleEvaluacionAprendizaje(req.params.id);
            respuestasHttp.exito(req, res, new EvaluacionAprendizajeDatosResModel(evaluacionAprendizaje), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la evaluacion de aprendizaje", err, 400);
    }
}

const putEvaluacionAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const evaluacionAprendizaje = await evaluacionAprendizajeServicio.actualizarCompetenciaUnidad(req.params.id, new EvaluacionAprendizajeActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new EvaluacionAprendizajeDatosResModel(evaluacionAprendizaje), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar la evaluacion de aprendizaje", err, 400);
    }
}

const deleteEvaluacionAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await evaluacionAprendizajeServicio.eliminarEvaluacionAprendizaje(req.params.id);
            respuestasHttp.exito(req, res, "Evaluacion de aprendizaje eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la evaluacion de aprendizaje", err, 400);
    }
}

export default {postEvaluacionAprendizaje, getEvaluacionAprendizaje, getDetalleEvaluacionAprendizaje, putEvaluacionAprendizaje, deleteEvaluacionAprendizaje}