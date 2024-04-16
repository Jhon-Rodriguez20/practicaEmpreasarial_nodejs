import respuestasHttp from "../../utils/respuestasHttp.js";
import datosGeneralesMicroServicio from "../../services/microcurriculo/datosGeneralesMicroServicio.js";
import { DatosGeneralesCrearReqModel, DatosGeneralesDatosResModel, DatosGeneralesActualizarReqModel } from "../../models/microcurriculo/DatosGeneralesMicroModelo.js";

const postDatosGenerales = async (req, res) => {

  try {

    if(!req.user.error) {
      const datosGenerales = await datosGeneralesMicroServicio.crearDatoGeneral(new DatosGeneralesCrearReqModel(req.body));
      respuestasHttp.exito(req, res, new DatosGeneralesDatosResModel(datosGenerales), 201);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch(err) {
    respuestasHttp.error(req, res, "Error al crear los datos generales", err, 400);
  }
}

const getDatosGenerales = async (req, res)=> {

  try {
    
    if(!req.user.error) {
      const array = await datosGeneralesMicroServicio.leerDatoGeneral();
      const losDatosGenerales = array.map(datosGenerales=> new DatosGeneralesDatosResModel(datosGenerales));
      respuestasHttp.exito(req, res, losDatosGenerales, 200);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch(err) {
    respuestasHttp.error(req, res, "Error al leer los datos generales", err, 400);
  }
}

const getDetalleDatosGenerales = async (req, res) => {

  try {
    
    if(!req.user.error) {
      const datosGenerales = await datosGeneralesMicroServicio.detalleDatoGeneral(req.params.id);
      respuestasHttp.exito(req, res, new DatosGeneralesDatosResModel(datosGenerales), 200);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch(err) {
    respuestasHttp.error(req, res, "Error al leer el detalle de los datos generales", err, 400);
  }
}

const putDatosGenerales = async (req, res) => {

  try {
    
    if(!req.user.error) {
      const datosGenerales = await datosGeneralesMicroServicio.actualizarDatoGeneral(req.params.id, new DatosGeneralesActualizarReqModel(req.body));
      respuestasHttp.exito(req, res, new DatosGeneralesDatosResModel(datosGenerales), 200);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch(err) {
    respuestasHttp.error(req, res, "Error al actualizar los datos generales", err, 400);
  }
}

const deleteDatosGenerales = async (req, res) => {

  try {

    if (!req.user.error) {
      await datosGeneralesMicroServicio.eliminarDatoGeneral(req.params.id);
      respuestasHttp.exito(req, res, "Datos generales eliminados", 200);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch(err) {
    respuestasHttp.error(req, res, "Error al eliminar el detalle de los datos generales", err, 400);
  }
}

export default { postDatosGenerales, getDatosGenerales, getDetalleDatosGenerales, putDatosGenerales, deleteDatosGenerales }