import respuestasHttp from "../../utils/respuestasHttp.js";
import lecturaComplementariaMicroServicio from "../../services/microcurriculo/lecturaComplementariaMicroServicio.js";
import { LecturaComplementariaCrearReqModel, LecturaComplementariaDatosResModel, LecturaComplementariaActualizarReqModel } from "../../models/microcurriculo/LecturaComplementariaMicroModelo.js";

const postLecturaComplementaria = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const lecturaComplementaria = await lecturaComplementariaMicroServicio.crearLecturaComplementaria(new LecturaComplementariaCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new LecturaComplementariaDatosResModel(lecturaComplementaria), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la lectura complementaria", err, 400);
    }
}

const getLecturaComplementaria = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await lecturaComplementariaMicroServicio.leerLecturaComplementaria();
            const lasLecturasComplementarias = array.map(lecturaComplementaria=> new LecturaComplementariaDatosResModel(lecturaComplementaria));
            respuestasHttp.exito(req, res, lasLecturasComplementarias, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las lecturas complementarias", err, 400);
    }
}

const getDetalleLecturaComplementaria = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const lecturaComplementaria = await lecturaComplementariaMicroServicio.detalleLecturaComplementaria(req.params.id);
            respuestasHttp.exito(req, res, new LecturaComplementariaDatosResModel(lecturaComplementaria), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la lectura complementaria", err, 400);
    }
}

const putLecturaComplementaria = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const lecturaComplementaria = await lecturaComplementariaMicroServicio.actualizarLecturaComplementaria(req.params.id, new LecturaComplementariaActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new LecturaComplementariaDatosResModel(lecturaComplementaria), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar la lectura complementaria", err, 400);
    }
}

const deleteLecturaComplementaria = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await lecturaComplementariaMicroServicio.eliminarLecturaComplementaria(req.params.id);
            respuestasHttp.exito(req, res, "Lectura complementaria eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la lectura complementaria", err, 400);
    }
}

export default {postLecturaComplementaria, getLecturaComplementaria, getDetalleLecturaComplementaria, putLecturaComplementaria, deleteLecturaComplementaria}