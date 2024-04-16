import respuestasHttp from "../../utils/respuestasHttp.js";
import microcurriculoServicio from "../../services/microcurriculo/microcurriculoServicio.js";
import { MicrocurriculoCrearReqModel, MicrocurriculoDatosResModel, MicrocurriculoActualizarReqModel } from "../../models/microcurriculo/MicrocurriculoModelo.js";
import { UsuarioMicrocurriculoCrearReqModel } from "../../models/UsuarioModelo.js";

const postMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const microcurriculo = await microcurriculoServicio.crearMicrocurriculo(new MicrocurriculoCrearReqModel(req.body),
            req.user.sub, new UsuarioMicrocurriculoCrearReqModel(req.body));

            respuestasHttp.exito(req, res, new MicrocurriculoDatosResModel(microcurriculo), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear el microcurriculo", err, 400);
    }
}

const getMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await microcurriculoServicio.leerMicrocurriculo();
            const losMicrocurriculos = array.map(microcurriculo=> new MicrocurriculoDatosResModel(microcurriculo));
            respuestasHttp.exito(req, res, losMicrocurriculos, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer los microcurriculos", err, 400);
    }
}

const getDetalleMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const microcurriculo = await microcurriculoServicio.detalleMicrocurriculo(req.params.id);
            respuestasHttp.exito(req, res, new MicrocurriculoDatosResModel(microcurriculo), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle del microcurriculo", err, 400);
    }
}

const putMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const microcurriculo = await microcurriculoServicio.actualizarMicrocurriculo(req.params.id, new MicrocurriculoActualizarReqModel(req.body), req.user.sub);
            respuestasHttp.exito(req, res, new MicrocurriculoDatosResModel(microcurriculo), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar el microcurriculo", err, 400);
    }
}

const deleteMicrocurriculo = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await microcurriculoServicio.eliminarMicrocurriculo(req.params.id, req.user.sub);
            respuestasHttp.exito(req, res, "Microcurriculo eliminado.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar el microcurriculo", err, 400);
    }
}

export default {postMicrocurriculo, getMicrocurriculo, getDetalleMicrocurriculo, putMicrocurriculo, deleteMicrocurriculo}