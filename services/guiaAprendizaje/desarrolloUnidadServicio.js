import desarrolloUnidadRepositorio from "../../db/repositorios/guiaAprendizaje/desarrolloUnidadRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { DesarrolloUnidadEntity } from "../../models/guiaAprendizaje/DesarrolloUnidadModelo.js";
import crypto from "crypto";

const crearDesarrolloUnidad = async (desarrolloUnidad)=> {

    if(!desarrolloUnidad.fechas || !desarrolloUnidad.queHacer ||
        !desarrolloUnidad.contenidosTematicos || !desarrolloUnidad.idGa) {
        throw new Error("Datos vacios.");
    }

    if(!desarrolloUnidad.idGa) {
        throw new Error("El id de la guia aprendizaje no se encuentra");
    }
    validarRol();

    desarrolloUnidad.idDua = crypto.randomUUID();
    
    await desarrolloUnidadRepositorio.crear(new DesarrolloUnidadEntity(desarrolloUnidad));

    return await desarrolloUnidadRepositorio.detalle(desarrolloUnidad.idDua);
}

const leerDesarrolloUnidad = async ()=> {
    return await desarrolloUnidadRepositorio.leer();
}

const detalleDesarrolloUnidad = async (idDua)=> {
    return await desarrolloUnidadRepositorio.detalle(idDua);
}

const actualizarDesarrolloUnidad= async (idDua, desarrolloUnidad)=> {

    if(!desarrolloUnidad.fechas || !desarrolloUnidad.queHacer || !desarrolloUnidad.contenidosTematicos || !desarrolloUnidad.idGa) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    const desarrolloUnidadDetalle = await desarrolloUnidadRepositorio.detalle(idDua);

    desarrolloUnidadDetalle.fechas = desarrolloUnidad.fechas;
    desarrolloUnidadDetalle.queHacer = desarrolloUnidad.queHacer;
    desarrolloUnidadDetalle.contenidosTematicos = desarrolloUnidad.contenidosTematicos;
    desarrolloUnidadDetalle.idGa = desarrolloUnidad.idGa;

    await desarrolloUnidadRepositorio.actualizar(desarrolloUnidadDetalle);

    return await desarrolloUnidadRepositorio.detalle(desarrolloUnidadDetalle.idDua);
}

const eliminarDesarrolloUnidad= async (idDua)=> {

    validarRol();
    const desarrolloUnidadDetalle = await desarrolloUnidadRepositorio.detalle(idDua);

    return await desarrolloUnidadRepositorio.eliminar(desarrolloUnidadDetalle.idDua);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente.");
    }
}

export default {crearDesarrolloUnidad, leerDesarrolloUnidad, detalleDesarrolloUnidad, actualizarDesarrolloUnidad, eliminarDesarrolloUnidad}