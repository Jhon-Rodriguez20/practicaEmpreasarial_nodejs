import respuestasHttp from "../../utils/respuestasHttp.js";
import articulacionSaberesMicroServicio from "../../services/microcurriculo/articulacionSaberesMicroServicio.js";
import { ArticulacionSaberesCrearReqModel, ArticulacionSaberesDatosResModel, ArticulacionSaberesActualizarReqModel } from "../../models/microcurriculo/ArticulacionSaberesMicroModelo.js";

const postArticulacionSaberes = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const articulacionSaberes = await articulacionSaberesMicroServicio.crearArticulacionSaberes(new ArticulacionSaberesCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new ArticulacionSaberesDatosResModel(articulacionSaberes), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la articulacion de saberes", err, 400);
    }
}

const getArticulacionSaberes = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await articulacionSaberesMicroServicio.leerArticulacionSaberes();
            const lasArticulacionesSaberes = array.map(articulacionSaberes=> new ArticulacionSaberesDatosResModel(articulacionSaberes));
            respuestasHttp.exito(req, res, lasArticulacionesSaberes, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las articulaciones de saberes", err, 400);
    }
}

const getDetalleArticulacionSaberes = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const articulacionSaberes = await articulacionSaberesMicroServicio.detalleArticulacionSaberes(req.params.id);
            respuestasHttp.exito(req, res, new ArticulacionSaberesDatosResModel(articulacionSaberes), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la articulacion de saberes", err, 400);
    }
}

const putArticulacionSaberes = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const articulacionSaberes = await articulacionSaberesMicroServicio.actualizarArticulacionSaberes(req.params.id, new ArticulacionSaberesActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new ArticulacionSaberesDatosResModel(articulacionSaberes), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar la articulacion de saberes", err, 400);
    }
}

const deleteArticulacionSaberes = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await articulacionSaberesMicroServicio.eliminarArticulacionSaberes(req.params.id);
            respuestasHttp.exito(req, res, "Articulacion de saberes eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la articulacion de saberes", err, 400);
    }
}

export default {postArticulacionSaberes, getArticulacionSaberes, getDetalleArticulacionSaberes, putArticulacionSaberes, deleteArticulacionSaberes}