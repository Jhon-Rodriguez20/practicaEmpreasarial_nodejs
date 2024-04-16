import respuestasHttp from "../../utils/respuestasHttp.js";
import unidadMicroServicio from "../../services/microcurriculo/unidadMicroServicio.js";
import { UnidadCrearReqModel, UnidadDatosResModel, UnidadActualizarReqModel } from "../../models/microcurriculo/UnidadMicroModelo.js";

const postUnidadMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const unidad = await unidadMicroServicio.crearUnidad(new UnidadCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new UnidadDatosResModel(unidad), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la unidad", err, 400);
    }
}

const getUnidadMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await unidadMicroServicio.leerUnidad();
            const lasUnidades = array.map(unidad=> new UnidadDatosResModel(unidad));
            respuestasHttp.exito(req, res, lasUnidades, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las unidades", err, 400);
    }
}

const getDetalleUnidadMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const unidad = await unidadMicroServicio.detalleUnidad(req.params.id);
            respuestasHttp.exito(req, res, new UnidadDatosResModel(unidad), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la unidad", err, 400);
    }
}

const putUnidadMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const unidad = await unidadMicroServicio.actualizarUnidad(req.params.id, new UnidadActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new UnidadDatosResModel(unidad), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar la unidad", err, 400);
    }
}

const deleteUnidadMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await unidadMicroServicio.eliminarUnidad(req.params.id);
            respuestasHttp.exito(req, res, "Unidad eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la unidad", err, 400);
    }
}

export default {postUnidadMicrocurriculo, getUnidadMicrocurriculo, getDetalleUnidadMicrocurriculo, putUnidadMicrocurriculo, deleteUnidadMicrocurriculo}