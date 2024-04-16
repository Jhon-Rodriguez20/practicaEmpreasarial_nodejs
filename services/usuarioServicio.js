import usuarioRepositorio from "../db/repositorios/usuarioRepositorio.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import rolRepositorio from "../db/repositorios/rolRepositorio.js";
import carreraRepositorio from "../db/repositorios/carreraRepositorio.js";
import { UsuarioEntity, UsuarioCarreraAsignada, UsuarioRolAsignado } from "../models/UsuarioModelo.js";
import microcurriculoRepositorio from "../db/repositorios/microcurriculo/microcurriculoRepositorio.js";
import guiaAprendizajeRepositorio from "../db/repositorios/guiaAprendizaje/guiaprendizajeRepositorio.js";

const crearUsuario = async (usuario) => {
  try {
    if (
      !usuario.nombre ||
      !usuario.email ||
      !usuario.username ||
      !usuario.password
    ) {
      throw new Error("Datos vacios o incorrectos");
    }

    const usuarioExistenteEmail = await usuarioRepositorio.buscarEmail(usuario.email);
    
    if (usuarioExistenteEmail) {
      throw new Error("Este correo ya se encuentra registrado");
    }

    const usuarioExistenteUsername = await usuarioRepositorio.buscarUsername(usuario.username);
    
    if (usuarioExistenteUsername) {
      throw new Error("Este usuario ya se encuentra registrado");
    }

    usuario.idUsuario = crypto.randomUUID();
    usuario.passwordEncriptada = bcrypt.hashSync(usuario.password, 10);
    usuario.creado = new Date();

    await usuarioRepositorio.crear(new UsuarioEntity(usuario));

    return await usuarioRepositorio.buscarUsername(usuario.username);

  } catch (error) {
    throw error;
  }
}

const asignarCarreraUsuario = async (usuario)=> {
  try {

    if(!usuario.idUsuario || !usuario.idCarrera) {
      throw new Error("Datos vacios o incorrectos.");
    }

    const idUsuarioExistente = await usuarioRepositorio.buscarId(usuario.idUsuario);

    if(!idUsuarioExistente) {
      throw new Error("Id de usuario no válido");
    }

    const idCarreraExistente = await carreraRepositorio.buscarId(usuario.idCarrera);

    if(!idCarreraExistente) {
      throw new Error("El id de la carrera no existe");
    }

    await usuarioRepositorio.asignarCarreraUsuario(new UsuarioCarreraAsignada(usuario));

    return await usuarioRepositorio.buscarNombreCarrera(usuario.idUsuario);

  } catch (err) {
      throw err;
  }
}

const asignarRolUsuario = async (usuario)=> {
  try {

    if(!usuario.idUsuario || !usuario.idRol) {
      throw new Error("Datos vacios.");
    }

    const idUsuarioExistente = await usuarioRepositorio.buscarId(usuario.idUsuario);

    if(!idUsuarioExistente) {
      throw new Error("Id de usuario no válido");
    }

    const idRolExistente = await rolRepositorio.buscarId(usuario.idRol);

    if(!idRolExistente) {
      throw new Error("El id del rol no existe");
    }

    await usuarioRepositorio.asignarRolUsuario(new UsuarioRolAsignado(usuario));
    
    return await usuarioRepositorio.buscarNombreRol(usuario.idUsuario);

  } catch (err) {
      throw err;
  }
}

const leerUsuario = async (idUsuario) => {
  
  try {
    const usuario = await usuarioRepositorio.buscarByIdUsuario(idUsuario);

    if (!usuario) {
      throw new Error("No se encuentra el usuario");
    }
    return usuario;

  } catch (error) {
    throw error;
  }
}

const leerUsuarioLogin = async (username)=> {

  try {
      const usuario = await usuarioRepositorio.buscarUsuario(username);

      if(!usuario) {
          throw new Error("No se pudo leer el usuario por el correo");
      }
      return usuario;

  } catch (error) {
      throw error;
  }
}

const leerMisMicrocurriculos = async (idUsuario)=> {
  
  try {
    const usuario = await usuarioRepositorio.buscarByIdUsuario(idUsuario);

    if(usuario == null) {
      throw new Error("No se encuentra el usuario");
    }

    const array = await microcurriculoRepositorio.misMicrocurriculos(usuario.idUsuario);

    return array;

  } catch (err) {
      throw new Error("No es posible obtener mis microcurriculos");
  }
}

const leerMisGuiasAprendizaje = async (idUsuario)=> {
  
  try {
    const usuario = await usuarioRepositorio.buscarByIdUsuario(idUsuario);

    if(usuario == null) {
      throw new Error("No se encuentra el usuario");
    }

    const array = await guiaAprendizajeRepositorio.misGuiasAprendizaje(usuario.idUsuario);

    return array;

  } catch (err) {
      throw new Error("No es posible obtener mis guias aprendizajes");
  }
}

export default { crearUsuario, leerUsuario, leerUsuarioLogin, asignarCarreraUsuario, asignarRolUsuario, leerMisMicrocurriculos, leerMisGuiasAprendizaje }