import respuestasHttp from "../../utils/respuestasHttp.js";
import competenciaGeneralMicroServicio from "../../services/microcurriculo/competenciaGeneralMicroServicio.js";
import { CompetenciaGeneralCrearReqModel, CompetenciaGeneralDatosResModel, CompetenciaGeneralActualizarReqModel } from "../../models/microcurriculo/CompetenciaGeneralMicroModelo.js";

const postCompetenciaGeneral = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const competenciaGeneral = await competenciaGeneralMicroServicio.crearCompetenciaGeneral(new CompetenciaGeneralCrearReqModel(req.body));
            respuestasHttp.exito(req, res, new CompetenciaGeneralDatosResModel(competenciaGeneral), 201);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al crear la competencia general", err, 400);
    }
}

const getCompetenciaGeneral = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const array = await competenciaGeneralMicroServicio.leerCompetenciaGeneral();
            const lasCompetenciasGenerales = array.map(competenciaGeneral=> new CompetenciaGeneralDatosResModel(competenciaGeneral));
            respuestasHttp.exito(req, res, lasCompetenciasGenerales, 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer las competencias generales", err, 400);
    }
}

const getDetalleCompetenciaGeneral = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const competenciaGeneral = await competenciaGeneralMicroServicio.detalleCompetenciaGeneral(req.params.id);
            respuestasHttp.exito(req, res, new CompetenciaGeneralDatosResModel(competenciaGeneral), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al leer el detalle de la competencia general", err, 400);
    }
}

const putCompetenciaGeneral = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            const competenciaGeneral = await competenciaGeneralMicroServicio.actualizarCompetenciaGeneral(req.params.id, new CompetenciaGeneralActualizarReqModel(req.body));
            respuestasHttp.exito(req, res, new CompetenciaGeneralDatosResModel(competenciaGeneral), 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al actualizar la competencia general", err, 400);
    }
}

const deleteCompetenciaGeneral = async (req, res)=> {

    try {
        
        if(!req.user.error) {
            await competenciaGeneralMicroServicio.eliminarCompetenciaGeneral(req.params.id);
            respuestasHttp.exito(req, res, "Competencia general eliminada.", 200);

        } else {
            respuestasHttp.error(req, res, "", req.user.error, 403);
        }

    } catch (err) {
        respuestasHttp.error(req, res, "Error al eliminar la competencia general", err, 400);
    }
}

export default {postCompetenciaGeneral, getCompetenciaGeneral, getDetalleCompetenciaGeneral, putCompetenciaGeneral, deleteCompetenciaGeneral}