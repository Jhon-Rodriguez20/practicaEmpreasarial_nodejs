import lecturaBasicaMicroRepositorio from "../../db/repositorios/microcurriculo/lecturaBasicaMicroRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { LecturaBasicaEntity } from "../../models/microcurriculo/LecturaBasicaMicroModelo.js";
import crypto from "crypto";

const crearLecturaBasica = async (lecturaBasica)=> {

    if(!lecturaBasica.referenciaLb || !lecturaBasica.idBg) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    lecturaBasica.idLb = crypto.randomUUID();
    
    await lecturaBasicaMicroRepositorio.crear(new LecturaBasicaEntity(lecturaBasica));

    return await lecturaBasicaMicroRepositorio.detalle(lecturaBasica.idLb);
}

const leerLecturaBasica = async ()=> {
    return await lecturaBasicaMicroRepositorio.leer();
}

const detalleLecturaBasica = async (idLb)=> {
    return await lecturaBasicaMicroRepositorio.detalle(idLb);
}

const actualizarLecturaBasica = async (idLb, lecturaBasica)=> {

    if(!lecturaBasica.referenciaLb || !lecturaBasica.idBg) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    const lecturaBasicaDetalle = await lecturaBasicaMicroRepositorio.detalle(idLb);

    lecturaBasicaDetalle.referenciaLb = lecturaBasica.referenciaLb;
    lecturaBasicaDetalle.idBg = lecturaBasica.idBg;

    await lecturaBasicaMicroRepositorio.actualizar(lecturaBasicaDetalle);

    return await lecturaBasicaMicroRepositorio.detalle(lecturaBasicaDetalle.idLb);
}

const eliminarLecturaBasica = async (idLb)=> {

    const lecturaBasicaDetalle = await lecturaBasicaMicroRepositorio.detalle(idLb);

    return await lecturaBasicaMicroRepositorio.eliminar(lecturaBasicaDetalle.idLb);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del director.");
    }
}

export default {crearLecturaBasica, leerLecturaBasica, detalleLecturaBasica, actualizarLecturaBasica, eliminarLecturaBasica}