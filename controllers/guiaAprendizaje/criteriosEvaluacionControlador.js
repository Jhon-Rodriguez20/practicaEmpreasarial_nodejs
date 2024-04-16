import respuestasHttp from "../../utils/respuestasHttp.js";
import criteriosEvaluacionServicio from "../../services/guiaAprendizaje/criteriosEvaluacionServicio.js";
import { CriteriosEvaluacionCrearReqModel, CriteriosEvaluacionDatosResModel, CriteriosEvaluacionActualizarReqModel } from "../../models/guiaAprendizaje/CriteriosEvaluacionModelo.js";

const postCriteriosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const criteriosEvaluacion = await criteriosEvaluacionServicio.crearCriteriosEvaluacion(new CriteriosEvaluacionCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new CriteriosEvaluacionDatosResModel(criteriosEvaluacion), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear el criterios de evaluacion", err, 400);
    }
}

const getCriteriosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await criteriosEvaluacionServicio.leerCriteriosEvaluacion();
            const losCriteriosEvaluacion = array.map(criteriosEvaluacion => new CriteriosEvaluacionDatosResModel(criteriosEvaluacion));
            respuestasHttp.exito(req, res, losCriteriosEvaluacion, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer los criterios de evaluacion", err, 400);
    }
}

const getDetalleCriteriosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const criteriosEvaluacion = await criteriosEvaluacionServicio.detalleCriteriosEvaluacion(req.params.id);
            respuestasHttp.exito(req, res, new CriteriosEvaluacionDatosResModel(criteriosEvaluacion), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle del criterio de evaluacion", err, 400);
    }
}

const putCriteriosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const criteriosEvaluacion = await criteriosEvaluacionServicio.actualizarCriteriosEvaluacion(req.params.id, new CriteriosEvaluacionActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new CriteriosEvaluacionDatosResModel(criteriosEvaluacion), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar el criterio de evaluacion", err, 400);
    }
}

const deleteCriteriosEvaluacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await criteriosEvaluacionServicio.eliminarCriteriosEvaluacion(req.params.id);
            respuestasHttp.exito(req, res, "Criterio de evaluacion eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar el criterio de evaluacion", err, 400);
    }
}

export default {postCriteriosEvaluacion, getCriteriosEvaluacion, getDetalleCriteriosEvaluacion, putCriteriosEvaluacion, deleteCriteriosEvaluacion}