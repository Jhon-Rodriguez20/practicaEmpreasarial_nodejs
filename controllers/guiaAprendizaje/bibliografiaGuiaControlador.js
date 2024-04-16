import respuestasHttp from "../../utils/respuestasHttp.js";
import bibliografiaGuiaServicio from "../../services/guiaAprendizaje/bibliografiaGuiaServicio.js";
import { BibliografiaGuiaCrearReqModel, BibliografiaGuiaDatosResModel, BibliografiaGuiaActualizarReqModel } from "../../models/guiaAprendizaje/BibliografiaGuiaModelo.js";

const postBibliografiaGuia = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const bibliografiaGuia = await bibliografiaGuiaServicio.crearBibliografiaGuia(new BibliografiaGuiaCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new BibliografiaGuiaDatosResModel(bibliografiaGuia), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la bibliografia", err, 400);
    }
}

const getBibliografiaGuia = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await bibliografiaGuiaServicio.leerBibliografiaGuia();
            const lasBibliografias = array.map(bibliografiaGuia=> new BibliografiaGuiaDatosResModel(bibliografiaGuia));
            respuestasHttp.exito(req, res, lasBibliografias, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las bibliografias", err, 400);
    }
}

const getDetalleBibliografiaGuia = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const bibliografiaGuia = await bibliografiaGuiaServicio.detalleBibliografiaGuia(req.params.id);
            respuestasHttp.exito(req, res, new BibliografiaGuiaDatosResModel(bibliografiaGuia), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la bibliografia", err, 400);
    }
}

const putBibliografiaGuia = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const bibliografiaGuia = await bibliografiaGuiaServicio.actualizarBibliografiaGuia(req.params.id, new BibliografiaGuiaActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new BibliografiaGuiaDatosResModel(bibliografiaGuia), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar labibliografia", err, 400);
    }
}

const deleteBibliografiaGuia = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await bibliografiaGuiaServicio.eliminarBibliografiaGuia(req.params.id);
            respuestasHttp.exito(req, res, "Bibliografia eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la bibliografia", err, 400);
    }
}

export default {postBibliografiaGuia, getBibliografiaGuia, getDetalleBibliografiaGuia, putBibliografiaGuia, deleteBibliografiaGuia}