import respuestasHttp from "../../utils/respuestasHttp.js";
import indicadoresDesempenoServicio from "../../services/guiaAprendizaje/indicadoresDesempenoServicio.js";
import { IndicadoresDesempenoCrearReqModel, IndicadoresDesempenoDatosResModel, IndicadoresDesempenoActualizarReqModel } from "../../models/guiaAprendizaje/IndicadoresDesempenoModelo.js";

const postIndicadoresDesempeno = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const indicadoresDesempeno = await indicadoresDesempenoServicio.crearIndicadoresDesempeno(new IndicadoresDesempenoCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new IndicadoresDesempenoDatosResModel(indicadoresDesempeno), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear los indicadores de desempeño", err, 400);
    }
}

const getIndicadoresDesempeno = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await indicadoresDesempenoServicio.leerIndicadoresDesempeno();
            const losIndicadoresDesempeno = array.map(indicadoresDesempeno=> new IndicadoresDesempenoDatosResModel(indicadoresDesempeno));
            respuestasHttp.exito(req, res, losIndicadoresDesempeno, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer los indicadores de desempeño", err, 400);
    }
}

const getDetalleIndicadoresDesempeno = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const indicadoresDesempeno = await indicadoresDesempenoServicio.detalleIndicadoresDesempeno(req.params.id);
            respuestasHttp.exito(req, res, new IndicadoresDesempenoDatosResModel(indicadoresDesempeno), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle del indicador de desempeño", err, 400);
    }
}

const putIndicadoresDesempeno = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const indicadoresDesempeno = await indicadoresDesempenoServicio.actualizarIndicadoresDesempeno(req.params.id, new IndicadoresDesempenoActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new IndicadoresDesempenoDatosResModel(indicadoresDesempeno), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar los indicadores de desempeño", err, 400);
    }
}

const deleteIndicadoresDesempeno = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await indicadoresDesempenoServicio.eliminarIndicadoresDesempeno(req.params.id);
            respuestasHttp.exito(req, res, "Indicadores de desempeño eliminados.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403); 
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar los indicadores de desempeño", err, 400);
    }
}

export default {postIndicadoresDesempeno, getIndicadoresDesempeno, getDetalleIndicadoresDesempeno, putIndicadoresDesempeno, deleteIndicadoresDesempeno}