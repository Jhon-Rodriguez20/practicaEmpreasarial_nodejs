import respuestasHttp from "../../utils/respuestasHttp.js";
import glosarioServicio from "../../services/guiaAprendizaje/glosarioServicio.js";
import { GlosarioCrearReqModel, GlosarioDatosResModel, GlosarioActualizarReqModel } from "../../models/guiaAprendizaje/GlosarioModelo.js";

const postGlosario = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const glosario = await glosarioServicio.crearGlosario(new GlosarioCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new GlosarioDatosResModel(glosario), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear el glosario", err, 400);
    }
}

const getGlosario = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await glosarioServicio.leerGlosario();
            const losGlosarios = array.map(glosario=> new GlosarioDatosResModel(glosario));
            respuestasHttp.exito(req, res, losGlosarios, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer los glosarios", err, 400);
    }
}

const getDetalleGlosario = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const glosario = await glosarioServicio.detalleGlosario(req.params.id);
            respuestasHttp.exito(req, res, new GlosarioDatosResModel(glosario), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle del glosario", err, 400);
    }
}

const putGlosario = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const glosario = await glosarioServicio.actualizarGlosario(req.params.id, new GlosarioActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new GlosarioDatosResModel(glosario), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar el glosario", err, 400);
    }
}

const deleteGlosario = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await glosarioServicio.eliminarGlosario(req.params.id);
            respuestasHttp.exito(req, res, "Glosario eliminado.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar el glosario", err, 400);
    }
}

export default {postGlosario, getGlosario, getDetalleGlosario, putGlosario, deleteGlosario}