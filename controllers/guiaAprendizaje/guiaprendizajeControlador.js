import respuestasHttp from "../../utils/respuestasHttp.js";
import guiaprendizajeServicio from "../../services/guiaAprendizaje/guiaprendizajeServicio.js";
import { GuiaprendizajeCrearReqModel, GuiaprendizajeDatosResModel,
     GuiaprendizajeActualizarReqModel, MicrocurriculoGuiaAprendizajeCrearReqModel } from "../../models/guiaAprendizaje/GuiaprendizajeModelo.js";
import { UsuarioGuiaAprendizajeCrearReqModel } from "../../models/UsuarioModelo.js";

const postGuiaAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const guiaAprendizaje = await guiaprendizajeServicio.crearGuiaAprendizaje(new GuiaprendizajeCrearReqModel(req.body),
            req.user.sub, new UsuarioGuiaAprendizajeCrearReqModel(req.body), new MicrocurriculoGuiaAprendizajeCrearReqModel(req.body));

            respuestasHttp.exito(req, res, new GuiaprendizajeDatosResModel(guiaAprendizaje), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la guia de aprendizaje", err, 400);
    }
}

const getGuiaAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await guiaprendizajeServicio.leerGuiaAprendizaje();
            const lasGuiasAprendizaje = array.map(guiaAprendizaje=> new GuiaprendizajeDatosResModel(guiaAprendizaje));
            respuestasHttp.exito(req, res, lasGuiasAprendizaje, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las guias de aprendizaje", err, 400);
    }
}

const getDetalleGuiaAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const guiaAprendizaje = await guiaprendizajeServicio.detalleGuiaAprendizaje(req.params.id);
            respuestasHttp.exito(req, res, new GuiaprendizajeDatosResModel(guiaAprendizaje), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la guia de aprendizaje", err, 400);
    }
}

const putGuiaAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const guiaAprendizaje = await guiaprendizajeServicio.actualizarGuiaAprendizaje(req.params.id, new GuiaprendizajeActualizarReqModel(req.body), req.user.sub);
            respuestasHttp.exito(req, res, new GuiaprendizajeDatosResModel(guiaAprendizaje), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar la guia de aprendizaje", err, 400);
    }
}

const deleteGuiaAprendizaje = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await guiaprendizajeServicio.eliminarGuiaAprendizaje(req.params.id, req.user.sub);
            respuestasHttp.exito(req, res, "Guia de aprendizaje eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la guia de aprendizaje", err, 400);
    }
}

export default {postGuiaAprendizaje, getGuiaAprendizaje, getDetalleGuiaAprendizaje, putGuiaAprendizaje, deleteGuiaAprendizaje}