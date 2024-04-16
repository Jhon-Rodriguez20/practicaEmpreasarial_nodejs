import respuestasHttp from "../../utils/respuestasHttp.js";
import conocimientosPreviosMicroServicio from "../../services/microcurriculo/conocimientosPreviosMicroServicio.js";
import { ConocimientosPreviosCrearReqModel, ConocimientosPreviosDatosResModel, ConocimientosPreviosActualizarReqModel } from "../../models/microcurriculo/ConocmientosPreviosMicroModelo.js";

const postConocimientosPrevios = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const conocimientosPrevios = await conocimientosPreviosMicroServicio.crearConocmientosPrevios(new ConocimientosPreviosCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new ConocimientosPreviosDatosResModel(conocimientosPrevios), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear los conocimientos previos", err, 400);
    }
}

const getConocimientosPrevios = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await conocimientosPreviosMicroServicio.leerConocimientosPrevios();
            const losConocimientosPrevios = array.map(conocimientosPrevios=> new ConocimientosPreviosDatosResModel(conocimientosPrevios));
            respuestasHttp.exito(req, res, losConocimientosPrevios, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer los conocimientos previos", err, 400);
    }
}

const getDetalleConocimientosPrevios = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const conocimientosPrevios = await conocimientosPreviosMicroServicio.detalleConocimientosPrevios(req.params.id);
            respuestasHttp.exito(req, res, new ConocimientosPreviosDatosResModel(conocimientosPrevios), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de los conocimientos previos", err, 400);
    }
}

const putConocimientosPrevios = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const conocimientosPrevios = await conocimientosPreviosMicroServicio.actualizarConocimientosPrevios(req.params.id, new ConocimientosPreviosActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new ConocimientosPreviosDatosResModel(conocimientosPrevios), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar los conocimientos previos", err, 400);
    }
}

const deleteConocimientosPrevios = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await conocimientosPreviosMicroServicio.eliminarConocimientosPrevios(req.params.id);
            respuestasHttp.exito(req, res, "Conocimientos previos eliminados.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar los conocimientos previos", err, 400);
    }
}

export default {postConocimientosPrevios, getConocimientosPrevios, getDetalleConocimientosPrevios, putConocimientosPrevios, deleteConocimientosPrevios}