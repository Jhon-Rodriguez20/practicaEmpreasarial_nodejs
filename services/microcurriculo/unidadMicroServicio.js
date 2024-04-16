import unidadMicroRepositorio from "../../db/repositorios/microcurriculo/unidadMicroRepositorio.js";
import { UnidadEntity } from "../../models/microcurriculo/UnidadMicroModelo.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import crypto from "crypto";

const crearUnidad= async (unidad)=> {

    if(!unidad.titulo || !unidad.competenciaEspecifica) {
        throw new Error("Datos vacios.");
    }
    validarRol();

    unidad.idUn = crypto.randomUUID();
    
    await unidadMicroRepositorio.crear(new UnidadEntity(unidad));

    return await unidadMicroRepositorio.detalleUnidad(unidad.idUn);
}

const leerUnidad= async ()=> {
    return await unidadMicroRepositorio.leer();
}

const detalleUnidad= async (idUn)=> {
    return await unidadMicroRepositorio.detalle(idUn);
}

const actualizarUnidad= async (idUn, unidad)=> {

    if(!unidad.titulo || !unidad.competenciaEspecifica) {
        throw new Error("Datos vacios.");
    }
    validarRol();

    const unidadDetalle = await unidadMicroRepositorio.detalleUnidad(idUn);

    unidadDetalle.titulo = unidad.titulo;
    unidadDetalle.competenciaEspecifica = unidad.competenciaEspecifica;

    await unidadMicroRepositorio.actualizar(unidadDetalle);

    return await unidadMicroRepositorio.detalle(unidadDetalle.idUn);
}

const eliminarUnidad= async (idUn)=> {

    validarRol();
    
    const unidadDetalle = await unidadMicroRepositorio.detalleUnidad(idUn);

    return await unidadMicroRepositorio.eliminar(unidadDetalle.idUn);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del director");
    }
}

export default {crearUnidad, leerUnidad, detalleUnidad, actualizarUnidad, eliminarUnidad}