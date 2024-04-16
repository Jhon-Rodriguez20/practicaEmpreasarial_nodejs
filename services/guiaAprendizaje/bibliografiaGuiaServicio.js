import bibliografiaGuiaRepositorio from "../../db/repositorios/guiaAprendizaje/bibliografiaGuiaRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { BibliografiaGuiaEntity } from "../../models/guiaAprendizaje/BibliografiaGuiaModelo.js";
import crypto from "crypto";

const crearBibliografiaGuia = async (bibliografiaGuia)=> {

    if(!bibliografiaGuia.referencias || !bibliografiaGuia.idGa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    bibliografiaGuia.idBgGa = crypto.randomUUID();

    await bibliografiaGuiaRepositorio.crear(new BibliografiaGuiaEntity(bibliografiaGuia));

    return await bibliografiaGuiaRepositorio.detalle(bibliografiaGuia.idBgGa);
}

const leerBibliografiaGuia = async ()=> {
    return await bibliografiaGuiaRepositorio.leer();
}

const detalleBibliografiaGuia = async (idBgGa)=> {
    return await bibliografiaGuiaRepositorio.detalle(idBgGa);
}

const actualizarBibliografiaGuia = async (idBgGa, bibliografiaGuia)=> {

    if(!bibliografiaGuia.referencias || !bibliografiaGuia.idGa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    const bibliografiaGuiaDetalle = await bibliografiaGuiaRepositorio.detalle(idBgGa);

    bibliografiaGuiaDetalle.referencias = bibliografiaGuia.referencias;
    bibliografiaGuiaDetalle.idGa = bibliografiaGuia.idGa;

    await bibliografiaGuiaRepositorio.actualizar(bibliografiaGuiaDetalle);

    return await bibliografiaGuiaRepositorio.detalle(bibliografiaGuiaDetalle.idBgGa);
}

const eliminarBibliografiaGuia = async (idBgGa)=> {

    validarRol();
    const bibliografiaGuiaDetalle = await bibliografiaGuiaRepositorio.detalle(idBgGa);

    return await bibliografiaGuiaRepositorio.eliminar(bibliografiaGuiaDetalle.idBgGa);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente.");
    }
}

export default {crearBibliografiaGuia, leerBibliografiaGuia, detalleBibliografiaGuia, actualizarBibliografiaGuia, eliminarBibliografiaGuia}