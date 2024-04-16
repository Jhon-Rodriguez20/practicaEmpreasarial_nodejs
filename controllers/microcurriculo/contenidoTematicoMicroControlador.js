import respuestasHttp from "../../utils/respuestasHttp.js";
import contenidoTematicoMicroServicio from "../../services/microcurriculo/contenidoTematicoMicroServicio.js";
import { ContenidoTematicoCrearReqModel, ContenidoTematicoDatosResModel, ContenidoTematicoActualizarReqModel } from "../../models/microcurriculo/ContenidoTematicoMicroModelo.js";

const postContenidoTematico = async (req, res)=> {

    try {
        
        if (!req.user.error) {
            const contenidoTematico = await contenidoTematicoMicroServicio.crearContenidoTematico(new ContenidoTematicoCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new ContenidoTematicoDatosResModel(contenidoTematico), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear el contenido tematico", err, 400);
    }
}

const getContenidoTematico = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await contenidoTematicoMicroServicio.leerContenidoTematico();
            const losContenidosTematicos = array.map(contenidoTematico=> new ContenidoTematicoDatosResModel(contenidoTematico));
            respuestasHttp.exito(req, res, losContenidosTematicos, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer los contenidos tematicos", err, 400);
    }
}

const getDetalleContenidoTematico = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const contenidoTematico = await contenidoTematicoMicroServicio.detalleContenidoTematico(req.params.id);
            respuestasHttp.exito(req, res, new ContenidoTematicoDatosResModel(contenidoTematico), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle del contenido tematico", err, 400);
    }
}

const putContenidoTematico = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const contenidoTematico = await contenidoTematicoMicroServicio.actualizarContenidoTematico(req.params.id, new ContenidoTematicoActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new ContenidoTematicoDatosResModel(contenidoTematico), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar el contenido tematico", err, 400);
    }
}

const deleteContenidoTematico = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await contenidoTematicoMicroServicio.eliminarContenidoTematico(req.params.id);
            respuestasHttp.exito(req, res, "Contenido tematico eliminado.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar el contenido tematico", err, 400);
    }
}

export default {postContenidoTematico, getContenidoTematico, getDetalleContenidoTematico, putContenidoTematico, deleteContenidoTematico}