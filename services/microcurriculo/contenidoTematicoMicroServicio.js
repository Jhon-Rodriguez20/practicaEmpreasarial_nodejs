import contenidoTematicoMicroRepositorio from "../../db/repositorios/microcurriculo/contenidoTematicoMicroRepositorio.js";
import { ContenidoTematicoEntity } from "../../models/microcurriculo/ContenidoTematicoMicroModelo.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import crypto from "crypto";

const crearContenidoTematico = async (contenidoTematico)=> {

    if(!contenidoTematico.tema || !contenidoTematico.subTema || !contenidoTematico.idUn) {
        throw new Error("Datos vacios.");
    }
    validarRol();

    contenidoTematico.idCt = crypto.randomUUID();
    
    await contenidoTematicoMicroRepositorio.crear(new ContenidoTematicoEntity(contenidoTematico));

    return await contenidoTematicoMicroRepositorio.detalle(contenidoTematico.idCt);
}

const leerContenidoTematico = async ()=> {
    return await contenidoTematicoMicroRepositorio.leer();
}

const detalleContenidoTematico = async (idCt)=> {
    return await contenidoTematicoMicroRepositorio.detalle(idCt);
}

const actualizarContenidoTematico = async (idCt, contenidoTematico)=> {

    if(!contenidoTematico.tema || !contenidoTematico.subTema || !contenidoTematico.idUn) {
        throw new Error("Datos vacios.");
    }
    validarRol();

    const contenidoTematicoDetalle = await contenidoTematicoMicroRepositorio.detalle(idCt);

    contenidoTematicoDetalle.tema = contenidoTematico.tema;
    contenidoTematicoDetalle.subTema = contenidoTematico.subTema;
    contenidoTematicoDetalle.idUn = contenidoTematico.idUn;

    await contenidoTematicoMicroRepositorio.actualizar(contenidoTematicoDetalle);

    return await contenidoTematicoMicroRepositorio.detalle(contenidoTematicoDetalle.idCt);
}

const eliminarContenidoTematico = async (idCt)=> {

    validarRol();

    const contenidoTematicoDetalle = await contenidoTematicoMicroRepositorio.detalle(idCt);

    return await contenidoTematicoMicroRepositorio.eliminar(contenidoTematicoDetalle.idCt);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del director");
    }
}

export default {crearContenidoTematico, leerContenidoTematico, detalleContenidoTematico, actualizarContenidoTematico, eliminarContenidoTematico}