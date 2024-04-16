import respuestasHttp from "../../utils/respuestasHttp.js";
import presentacionServicio from "../../services/guiaAprendizaje/presentacionServicio.js";
import { PresentacionCrearReqModel, PresentacionDatosResModel, PresentacionActualizarReqModel } from "../../models/guiaAprendizaje/PresentacionModelo.js";

const postPresentacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const presentacion = await presentacionServicio.crearPresentacion(new PresentacionCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new PresentacionDatosResModel(presentacion), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la presentacion", err, 400);
    }
}

const getPresentacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await presentacionServicio.leerPresentacion();
            const lasPresentaciones = array.map(presentacion=> new PresentacionDatosResModel(presentacion));
            respuestasHttp.exito(req, res, lasPresentaciones, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las presentaciones", err, 400);
    }
}

const getDetallePresentacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const presentacion = await presentacionServicio.detallePresentacion(req.params.id);
            respuestasHttp.exito(req, res, new PresentacionDatosResModel(presentacion), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la presentacion", err, 400);
    }
}

const putPresentacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const presentacion = await presentacionServicio.actualizarPresentacion(req.params.id, new PresentacionActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new PresentacionDatosResModel(presentacion), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar la presentacion", err, 400);
    }
}

const deletePresentacion = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await presentacionServicio.eliminarPresentacion(req.params.id);
            respuestasHttp.exito(req, res, "Presentacion eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        } 

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la presentacion", err, 400);
    }
}

export default {postPresentacion, getPresentacion, getDetallePresentacion, putPresentacion, deletePresentacion}