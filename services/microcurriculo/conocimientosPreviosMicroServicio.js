import conocimientosPreviosMicroRepositorio from "../../db/repositorios/microcurriculo/conocimientosPreviosMicroRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { ConocimientosPreviosEntity } from "../../models/microcurriculo/ConocmientosPreviosMicroModelo.js";
import crypto from "crypto";

const crearConocmientosPrevios = async (conocimientosPrevios)=> {

    if(!conocimientosPrevios.descripcionCp) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    conocimientosPrevios.idCp = crypto.randomUUID();
    
    await conocimientosPreviosMicroRepositorio.crear(new ConocimientosPreviosEntity(conocimientosPrevios));

    return await conocimientosPreviosMicroRepositorio.detalle(conocimientosPrevios.idCp);
}

const leerConocimientosPrevios = async ()=> {
    return await conocimientosPreviosMicroRepositorio.leer();
}

const detalleConocimientosPrevios = async (idCp)=> {
    return await conocimientosPreviosMicroRepositorio.detalle(idCp);
}

const actualizarConocimientosPrevios = async (idCp, conocimientosPrevios)=> {

    if(!conocimientosPrevios.descripcionCp) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    const conocimientosPreviosDetalle = await conocimientosPreviosMicroRepositorio.detalle(idCp);

    conocimientosPreviosDetalle.descripcionCp = conocimientosPrevios.descripcionCp;

    await conocimientosPreviosMicroRepositorio.actualizar(conocimientosPreviosDetalle);

    return await conocimientosPreviosMicroRepositorio.detalle(conocimientosPreviosDetalle.idCp);
}

const eliminarConocimientosPrevios = async (idCp)=> {

    const conocimientosPreviosDetalle = await conocimientosPreviosMicroRepositorio.detalle(idCp);

    return await conocimientosPreviosMicroRepositorio.eliminar(conocimientosPreviosDetalle.idCp);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del director.");
    }
}

export default {crearConocmientosPrevios, leerConocimientosPrevios, detalleConocimientosPrevios, actualizarConocimientosPrevios, eliminarConocimientosPrevios}