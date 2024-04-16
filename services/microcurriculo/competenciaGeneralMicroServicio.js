import competenciaGeneralMicroRepositorio from "../../db/repositorios/microcurriculo/competenciaGeneralMicroRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { CompetenciaGeneralEntity } from "../../models/microcurriculo/CompetenciaGeneralMicroModelo.js";
import crypto from "crypto";

const crearCompetenciaGeneral= async (competenciaGeneral)=> {

    if(!competenciaGeneral.descripcionCg || !competenciaGeneral.justificacion ||
        !competenciaGeneral.objetivoGeneral) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    competenciaGeneral.idCg = crypto.randomUUID();
    
    await competenciaGeneralMicroRepositorio.crear(new CompetenciaGeneralEntity(competenciaGeneral));

    return await competenciaGeneralMicroRepositorio.detalle(competenciaGeneral.idCg);
}

const leerCompetenciaGeneral= async ()=> {
    return await competenciaGeneralMicroRepositorio.leer();
}

const detalleCompetenciaGeneral= async (idCg)=> {
    return await competenciaGeneralMicroRepositorio.detalle(idCg);
}

const actualizarCompetenciaGeneral= async (idCg, competenciaGeneral)=> {

    if(!competenciaGeneral.descripcionCg || !competenciaGeneral.justificacion ||
        !competenciaGeneral.objetivoGeneral) {
        throw new Error("Datos vacios.");
    }

    validarRol();

    const competenciaGeneralDetalle = await competenciaGeneralMicroRepositorio.detalle(idCg);

    competenciaGeneralDetalle.descripcionCg = competenciaGeneral.descripcionCg;
    competenciaGeneralDetalle.justificacion = competenciaGeneral.justificacion;
    competenciaGeneralDetalle.objetivoGeneral = competenciaGeneral.objetivoGeneral;

    await competenciaGeneralMicroRepositorio.actualizar(competenciaGeneralDetalle);

    return await competenciaGeneralMicroRepositorio.detalle(competenciaGeneralDetalle.idCg);
}

const eliminarCompetenciaGeneral= async (idCg)=> {

    const competenciaGeneralDetalle = await competenciaGeneralMicroRepositorio.detalle(idCg);

    return await competenciaGeneralMicroRepositorio.eliminar(competenciaGeneralDetalle.idCg);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDirector(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del director.");
    }
}

export default {crearCompetenciaGeneral, leerCompetenciaGeneral, detalleCompetenciaGeneral, actualizarCompetenciaGeneral, eliminarCompetenciaGeneral}