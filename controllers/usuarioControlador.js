import respuestasHttp from "../utils/respuestasHttp.js";
import usuarioServicio from "../services/usuarioServicio.js";

import { UsuarioCrearReqModel, UsuarioDatosResModel, UsuarioCarreraAsignada, UsuarioRolAsignado,
        UsuarioCarreraAsignadaDatosResModel, UsuarioRolAsignadoDatosResModel } from "../models/UsuarioModelo.js";

import { MicrocurriculoDatosResModel } from "../models/microcurriculo/MicrocurriculoModelo.js";
import { GuiaprendizajeDatosResModel } from "../models/guiaAprendizaje/GuiaprendizajeModelo.js";

const postUsuario = async (req, res) => {
  
  try {
    
    if(!req.user.error) {
      const usuarioReq = new UsuarioCrearReqModel(req.body);
      const usuario = await usuarioServicio.crearUsuario(usuarioReq);
      const usuarioRes = new UsuarioDatosResModel(usuario);
      respuestasHttp.exito(req, res, usuarioRes, 201);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch (error) {
    respuestasHttp.error(req, res, error.message, "Error al crear el usuario", 400);
  }
}

const asignarCarrera = async (req, res)=> {

  try {

    if(!req.user.error) {
      const usuarioCarreraReq = new UsuarioCarreraAsignada(req.body);
      const usuarioCarrera = await usuarioServicio.asignarCarreraUsuario(usuarioCarreraReq);
      const usuarioCarreraRes = new UsuarioCarreraAsignadaDatosResModel(usuarioCarrera);
      respuestasHttp.exito(req, res, usuarioCarreraRes, 201);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch (error) {
    respuestasHttp.error(req, res, error.message, "Error al asignar la carrera al usuario.");
  }
}

const asignarRol = async (req, res)=> {

  try {

    if(!req.user.error) {
      const usuarioRolReq = new UsuarioRolAsignado(req.body);
      const usuarioRol = await usuarioServicio.asignarRolUsuario(usuarioRolReq);
      const usuarioRolRes = new UsuarioRolAsignadoDatosResModel(usuarioRol);
      respuestasHttp.exito(req, res, usuarioRolRes, 201);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch (error) {
    respuestasHttp.error(req, res, error.message, "Error al asignar el rol al usuario.");
  }
}

const getUsuario = async (req, res) => {

  try {

    if(!req.user.error) {
      const usuario = await usuarioServicio.leerUsuario(req.user.sub);
      const usuarioRes = new UsuarioDatosResModel(usuario);
      respuestasHttp.exito(req, res, usuarioRes, 200);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch (error) {
    respuestasHttp.error(req, res, error.message, "Error al leer el usuario", 400);
  }
}

const getMisMicrocurriculos = async (req, res) => {

  try {

    if(!req.user.error) {
      const array = await usuarioServicio.leerMisMicrocurriculos(req.user.sub);
      let losMicrocurriculos = array.map(microcurriculo => new MicrocurriculoDatosResModel(microcurriculo));
      respuestasHttp.exito(req, res, losMicrocurriculos, 200);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch (err) {
      respuestasHttp.error(req, res, err, "Error al leer mis microcurriculos", 400);
  }
}

const getMisGuiasAprendizaje = async (req, res) => {

  try {

    if(!req.user.error) {
      const array = await usuarioServicio.leerMisGuiasAprendizaje(req.user.sub);
      let lasGuias = array.map(guiaAprendizaje => new GuiaprendizajeDatosResModel(guiaAprendizaje));
      respuestasHttp.exito(req, res, lasGuias, 200);

    } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
    }

  } catch (err) {
      respuestasHttp.error(req, res, err, "Error al leer mis guias aprendizaje", 400);
  }
}

const postSignin= (req, res)=> {
    
  if(!req.user.error) {
      respuestasHttp.signin(req, res, "", 200);
  } else {
      respuestasHttp.error(req, res, "", req.user.error, 403);
  }
}

export default {postUsuario, asignarCarrera, asignarRol, getUsuario, getMisMicrocurriculos, getMisGuiasAprendizaje, postSignin};