import lecturaComplementariaMicroRepositorio from "../../db/repositorios/microcurriculo/lecturaComplementariaMicroRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { LecturaComplementariaEntity } from "../../models/microcurriculo/LecturaComplementariaMicroModelo.js";
import crypto from "crypto";

const crearLecturaComplementaria = async (lecturaComplementaria)=> {

    if(!lecturaComplementaria.referenciaLc || !lecturaComplementaria.idBg) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    lecturaComplementaria.idLc = crypto.randomUUID();
    
    await lecturaComplementariaMicroRepositorio.crear(new LecturaComplementariaEntity(lecturaComplementaria));

    return await lecturaComplementariaMicroRepositorio.detalle(lecturaComplementaria.idLc);
}

const leerLecturaComplementaria = async ()=> {
    return await lecturaComplementariaMicroRepositorio.leer();
}

const detalleLecturaComplementaria = async (idLc)=> {
    return await lecturaComplementariaMicroRepositorio.detalle(idLc);
}

const actualizarLecturaComplementaria = async (idLc, lecturaComplementaria)=> {

    if(!lecturaComplementaria.referenciaLc || !lecturaComplementaria.idBg) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    const lecturaComplementariaDetalle = await lecturaComplementariaMicroRepositorio.detalle(idLc);

    lecturaComplementariaDetalle.referenciaLc = lecturaComplementaria.referenciaLc;
    lecturaComplementariaDetalle.idBg = lecturaComplementaria.idBg;

    await lecturaComplementariaMicroRepositorio.actualizar(lecturaComplementariaDetalle);

    return await lecturaComplementariaMicroRepositorio.detalle(lecturaComplementariaDetalle.idLc);
}

const eliminarLecturaComplementaria = async (idLc)=> {

    const lecturaComplementariaDetalleDetalle = await lecturaComplementariaMicroRepositorio.detalle(idLc);

    return await lecturaComplementariaMicroRepositorio.eliminar(lecturaComplementariaDetalleDetalle.idLc);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del director.");
    }
}

export default {crearLecturaComplementaria, leerLecturaComplementaria, detalleLecturaComplementaria, actualizarLecturaComplementaria, eliminarLecturaComplementaria}