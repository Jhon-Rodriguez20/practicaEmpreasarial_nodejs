import comoHacerloDevUnidadRepositorio from "../../db/repositorios/guiaAprendizaje/comoHacerloDevUnidadRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { ComoHacerloDevUnidadEntity } from "../../models/guiaAprendizaje/ComoHacerloDevUnidad.js";
import crypto from "crypto";

const crearComoHacerloDevUnidad = async (comoHacerloDevUnidad)=> {

    if(!comoHacerloDevUnidad.descripcionCh || !comoHacerloDevUnidad.idDua) {
        throw new Error("Datos vacios");
    }
    validarRol();

    comoHacerloDevUnidad.idCh = crypto.randomUUID();

    await comoHacerloDevUnidadRepositorio.crear(new ComoHacerloDevUnidadEntity(comoHacerloDevUnidad));

    return await comoHacerloDevUnidadRepositorio.detalle(comoHacerloDevUnidad.idCh);
}

const leerComoHacerloDevUnidad = async ()=> {
    return await comoHacerloDevUnidadRepositorio.leer();
}

const detalleComoHacerloDevUnidad = async (idCh)=> {
    return await comoHacerloDevUnidadRepositorio.detalle(idCh);
}

const actualizarComoHacerloDevUnidad = async (idCh, comoHacerloDevUnidad)=> {

    if(!comoHacerloDevUnidad.descripcionCh || !comoHacerloDevUnidad.idDua) {
        throw new Error("Datos vacios");
    }
    validarRol();

    const comoHacerloDevUnidadDetalle = await comoHacerloDevUnidadRepositorio.detalle(idCh);

    comoHacerloDevUnidadDetalle.descripcionCh = comoHacerloDevUnidad.descripcionCh;
    comoHacerloDevUnidadDetalle.idDua = comoHacerloDevUnidad.idDua;

    await comoHacerloDevUnidadRepositorio.actualizar(comoHacerloDevUnidadDetalle);

    return await comoHacerloDevUnidadRepositorio.detalle(comoHacerloDevUnidadDetalle.idCh);
}

const eliminarComoHacerloDevUnidad = async (idCh)=> {

    validarRol();
    const comoHacerloDevUnidadDetalle = await comoHacerloDevUnidadRepositorio.detalle(idCh);

    return await comoHacerloDevUnidadRepositorio.eliminar(comoHacerloDevUnidadDetalle.idCh);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente.");
    }
}

export default {crearComoHacerloDevUnidad, leerComoHacerloDevUnidad, detalleComoHacerloDevUnidad, actualizarComoHacerloDevUnidad, eliminarComoHacerloDevUnidad}