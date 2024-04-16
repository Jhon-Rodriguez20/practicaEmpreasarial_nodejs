import presentacionRepositorio from "../../db/repositorios/guiaAprendizaje/presentacionRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { PresentacionEntity } from "../../models/guiaAprendizaje/PresentacionModelo.js";
import crypto from "crypto";

const crearPresentacion = async (presentacion)=> {

    if(!presentacion.descripcionPg) {
        throw new Error("Datos vacios");
    }
    validarRol();

    presentacion.idPt = crypto.randomUUID();

    await presentacionRepositorio.crear(new PresentacionEntity(presentacion));

    return await presentacionRepositorio.detalle(presentacion.idPt);
}

const leerPresentacion = async ()=> {
    return await presentacionRepositorio.leer();
}

const detallePresentacion = async (idPt)=> {
    return await presentacionRepositorio.detalle(idPt);
}

const actualizarPresentacion = async (idPt, presentacion)=> {

    if(!presentacion.descripcionPg) {
        throw new Error("Datos vacios");
    }
    validarRol();

    const presentacionDetalle = await presentacionRepositorio.detalle(idPt);

    presentacionDetalle.descripcionPg = presentacion.descripcionPg;

    await presentacionRepositorio.actualizar(presentacionDetalle);

    return await presentacionRepositorio.detalle(presentacionDetalle.idPt);
}

const eliminarPresentacion = async (idPt)=> {

    validarRol();
    const presentacionDetalle = await presentacionRepositorio.detalle(idPt);

    return await presentacionRepositorio.eliminar(presentacionDetalle.idPt);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente.");
    }
}

export default {crearPresentacion, leerPresentacion, detallePresentacion, actualizarPresentacion, eliminarPresentacion}