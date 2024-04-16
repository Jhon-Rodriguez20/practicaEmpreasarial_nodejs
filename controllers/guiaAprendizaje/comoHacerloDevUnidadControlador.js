import respuestasHttp from "../../utils/respuestasHttp.js";
import comoHacerloDevUnidadServicio from "../../services/guiaAprendizaje/comoHacerloDevUnidadServicio.js";
import { ComoHacerloDevUnidadCrearReqModel, ComoHacerloDevUnidadDatosResModel, ComoHacerloDevUnidadActualizarReqModel } from "../../models/guiaAprendizaje/ComoHacerloDevUnidad.js";

const postComoHacerloDevUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const comoHacerloDevUnidad = await comoHacerloDevUnidadServicio.crearComoHacerloDevUnidad(new ComoHacerloDevUnidadCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new ComoHacerloDevUnidadDatosResModel(comoHacerloDevUnidad), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear el como hacer el desarrollo de la unidad", err, 400);
    }
}

const getComoHacerloDevUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await comoHacerloDevUnidadServicio.leerComoHacerloDevUnidad();
            const comoHacerlos = array.map(comoHacerloDevUnidad=> new ComoHacerloDevUnidadDatosResModel(comoHacerloDevUnidad));
            respuestasHttp.exito(req, res, comoHacerlos, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el como hacer el desarrollo de la unidad", err, 400);
    }
}

const getDetalleComoHacerloDevUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const comoHacerloDevUnidad = await comoHacerloDevUnidadServicio.detalleComoHacerloDevUnidad(req.params.id);
            respuestasHttp.exito(req, res, new ComoHacerloDevUnidadDatosResModel(comoHacerloDevUnidad), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle del como hacer el desarrollo de la unidad", err, 400);
    }
}

const putComoHacerloDevUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const comoHacerloDevUnidad = await comoHacerloDevUnidadServicio.actualizarComoHacerloDevUnidad(req.params.id, new ComoHacerloDevUnidadActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new ComoHacerloDevUnidadDatosResModel(comoHacerloDevUnidad), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar el como hacer el desarrollo de la unidad", err, 400);
    }
}

const deleteComoHacerloDevUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await comoHacerloDevUnidadServicio.eliminarComoHacerloDevUnidad(req.params.id);
            respuestasHttp.exito(req, res, "Como hacer la unidad eliminado.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar el como hacer el desarrollo de la unidad", err, 400);
    }
}

export default {postComoHacerloDevUnidad, getComoHacerloDevUnidad, getDetalleComoHacerloDevUnidad, putComoHacerloDevUnidad, deleteComoHacerloDevUnidad}