import bibliografiaMicroRepositorio from "../../db/repositorios/microcurriculo/bibliografiaMicroRepositorio.js";
import { BibliografiaEntity } from "../../models/microcurriculo/BibliografiaMicroModelo.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import crypto from "crypto";

const crearBibliografia = async (bibliografiaMicrocurriculo)=> {

    validarRol();

    bibliografiaMicrocurriculo.idBg = crypto.randomUUID();
    
    await bibliografiaMicroRepositorio.crear(new BibliografiaEntity(bibliografiaMicrocurriculo));

    return await bibliografiaMicroRepositorio.detalleBibliografia(bibliografiaMicrocurriculo.idBg);
}

const leerBibliografia = async ()=> {
    return await bibliografiaMicroRepositorio.leer();
}

const detalleBibliografia = async (idBg)=> {
    return await bibliografiaMicroRepositorio.detalle(idBg);
}

const eliminarBibliografia = async (idBg)=> {

    validarRol();

    const bibliografiaDetalle = await bibliografiaMicroRepositorio.detalle(idBg);

    return await bibliografiaMicroRepositorio.eliminar(bibliografiaDetalle.idBg);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del director");
    }
}

export default {crearBibliografia, leerBibliografia, detalleBibliografia, eliminarBibliografia}