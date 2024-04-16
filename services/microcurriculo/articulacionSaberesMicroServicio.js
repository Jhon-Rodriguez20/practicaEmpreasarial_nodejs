import articulacionSaberesMicroRepositorio from "../../db/repositorios/microcurriculo/articulacionSaberesMicroRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { ArticulacionSaberesEntity } from "../../models/microcurriculo/ArticulacionSaberesMicroModelo.js";
import crypto from "crypto";

const crearArticulacionSaberes = async (articulacionSaberes)=> {

    if(!articulacionSaberes.descripcionAs) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    articulacionSaberes.idAs = crypto.randomUUID();
    
    await articulacionSaberesMicroRepositorio.crear(new ArticulacionSaberesEntity(articulacionSaberes));

    return await articulacionSaberesMicroRepositorio.detalle(articulacionSaberes.idAs);
}

const leerArticulacionSaberes = async ()=> {
    return await articulacionSaberesMicroRepositorio.leer();
}

const detalleArticulacionSaberes = async (idAs)=> {
    return await articulacionSaberesMicroRepositorio.detalle(idAs);
}

const actualizarArticulacionSaberes = async (idAs, articulacionSaberes)=> {

    if(!articulacionSaberes.descripcionAs) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    const articulacionSaberesDetalle = await articulacionSaberesMicroRepositorio.detalle(idAs);

    articulacionSaberesDetalle.descripcionAs = articulacionSaberes.descripcionAs;

    await articulacionSaberesMicroRepositorio.actualizar(articulacionSaberesDetalle);

    return await articulacionSaberesMicroRepositorio.detalle(articulacionSaberesDetalle.idAs);
}

const eliminarArticulacionSaberes = async (idAs)=> {

    const articulacionSaberesDetalle = await articulacionSaberesMicroRepositorio.detalle(idAs);

    return await articulacionSaberesMicroRepositorio.eliminar(articulacionSaberesDetalle.idAs);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del director.");
    }
}

export default {crearArticulacionSaberes, leerArticulacionSaberes, detalleArticulacionSaberes, actualizarArticulacionSaberes, eliminarArticulacionSaberes}