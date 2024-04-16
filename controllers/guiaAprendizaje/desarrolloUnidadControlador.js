import respuestasHttp from "../../utils/respuestasHttp.js";
import desarrolloUnidadServicio from "../../services/guiaAprendizaje/desarrolloUnidadServicio.js";
import { DesarrolloUnidadCrearReqModel, DesarrolloUnidadDatosResModel, DesarrolloUnidadActualizarReqModel } from "../../models/guiaAprendizaje/DesarrolloUnidadModelo.js";

const postDesarrolloUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const desarrolloUnidad = await desarrolloUnidadServicio.crearDesarrolloUnidad(new DesarrolloUnidadCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new DesarrolloUnidadDatosResModel(desarrolloUnidad), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear el desarrollo de la unidad de aprendizaje", err, 400);
    }
}

const getDesarrolloUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await desarrolloUnidadServicio.leerDesarrolloUnidad();
            const losDesarrollosUnidad = array.map(desarrolloUnidad=> new DesarrolloUnidadDatosResModel(desarrolloUnidad));
            respuestasHttp.exito(req, res, losDesarrollosUnidad, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer los desarrollos de unidades de aprendizaje", err, 400);
    }
}

const getDetalleDesarrolloUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const desarrolloUnidad = await desarrolloUnidadServicio.detalleDesarrolloUnidad(req.params.id);
            respuestasHttp.exito(req, res, new DesarrolloUnidadDatosResModel(desarrolloUnidad), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle del desarrollo de la unidad de aprendizaje", err, 400);
    }
}

const putDesarrolloUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const desarrolloUnidad = await desarrolloUnidadServicio.actualizarDesarrolloUnidad(req.params.id, new DesarrolloUnidadActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new DesarrolloUnidadDatosResModel(desarrolloUnidad), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar el desarrollo de la unidad de aprendizaje", err, 400);
    }
}

const deleteDesarrolloUnidad = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await desarrolloUnidadServicio.eliminarDesarrolloUnidad(req.params.id);
            respuestasHttp.exito(req, res, "Desarrollo de la unidad de aprendizaje eliminado.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar el desarrollo de la unidad de aprendizaje", err, 400);
    }
}

export default {postDesarrolloUnidad, getDesarrolloUnidad, getDetalleDesarrolloUnidad, putDesarrolloUnidad, deleteDesarrolloUnidad}