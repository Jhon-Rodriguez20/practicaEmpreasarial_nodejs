import respuestasHttp from "../../utils/respuestasHttp.js";
import lecturaBasicaMicroServicio from "../../services/microcurriculo/lecturaBasicaMicroServicio.js";
import { LecturaBasicaCrearReqModel, LecturaBasicaDatosResModel, LecturaBasicaActualizarReqModel } from "../../models/microcurriculo/LecturaBasicaMicroModelo.js";

const postLecturaBasica = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const lecturaBasica = await lecturaBasicaMicroServicio.crearLecturaBasica(new LecturaBasicaCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new LecturaBasicaDatosResModel(lecturaBasica), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la lectura basica", err, 400);
    }
}

const getLecturaBasica = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await lecturaBasicaMicroServicio.leerLecturaBasica();
            const lasLecturasBasicas = array.map(lecturaBasica=> new LecturaBasicaDatosResModel(lecturaBasica));
            respuestasHttp.exito(req, res, lasLecturasBasicas, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las lecturas basicas", err, 400);
    }
}

const getDetalleLecturaBasica = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const lecturaBasica = await lecturaBasicaMicroServicio.detalleLecturaBasica(req.params.id);
            respuestasHttp.exito(req, res, new LecturaBasicaDatosResModel(lecturaBasica), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la lectura basica", err, 400);
    }
}

const putLecturaBasica = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const lecturaBasica = await lecturaBasicaMicroServicio.actualizarLecturaBasica(req.params.id, new LecturaBasicaActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new LecturaBasicaDatosResModel(lecturaBasica), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar la lectura basica", err, 400);
    }
}

const deleteLecturaBasica = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await lecturaBasicaMicroServicio.eliminarLecturaBasica(req.params.id);
            respuestasHttp.exito(req, res, "Lectura basica eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la lectura basica", err, 400);
    }
}

export default {postLecturaBasica, getLecturaBasica, getDetalleLecturaBasica, putLecturaBasica, deleteLecturaBasica}