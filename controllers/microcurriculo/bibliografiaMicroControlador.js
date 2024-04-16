import respuestasHttp from "../../utils/respuestasHttp.js";
import bibliografiaMicroServicio from "../../services/microcurriculo/bibliografiaMicroServicio.js";
import { BibliografiaCrearReqModel, BibliografiaDatosResModel } from "../../models/microcurriculo/BibliografiaMicroModelo.js";

const postBibliografia = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const bibliografia = await bibliografiaMicroServicio.crearBibliografia(new BibliografiaCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new BibliografiaDatosResModel(bibliografia), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la bibliografia", err, 400);
    }
}

const getBibliografia = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await bibliografiaMicroServicio.leerBibliografia();
            const lasBibliografias = array.map(bibliografia=> new BibliografiaDatosResModel(bibliografia));
            respuestasHttp.exito(req, res, lasBibliografias, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las bibliografias", err, 400);
    }
}

const getDetalleBibliografia = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const bibliografia = await bibliografiaMicroServicio.detalleBibliografia(req.params.id);
            respuestasHttp.exito(req, res, new BibliografiaDatosResModel(bibliografia), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la bibliografias", err, 400);
    }
}

const deleteBibliografia = async (req, res)=> {
    
    try {
        
        if(!req.user.error) {
            await bibliografiaMicroServicio.eliminarBibliografia(req.params.id);
            respuestasHttp.exito(req, res, "Bibliografia eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la bibliografia.", err, 400);
    }
}

export default {postBibliografia, getBibliografia, getDetalleBibliografia, deleteBibliografia}