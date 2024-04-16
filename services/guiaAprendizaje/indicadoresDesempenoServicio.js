import indicadoresDesempenoRepositorio from "../../db/repositorios/guiaAprendizaje/indicadoresDesempenoRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { IndicadoresDesempenoEntity } from "../../models/guiaAprendizaje/IndicadoresDesempenoModelo.js";
import crypto from "crypto";

const crearIndicadoresDesempeno = async (indicadoresDesempeno)=> {

    if(!indicadoresDesempeno.saberSaber || !indicadoresDesempeno.saberHacer ||
        !indicadoresDesempeno.saberSer || !indicadoresDesempeno.idGa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    indicadoresDesempeno.idId = crypto.randomUUID();

    await indicadoresDesempenoRepositorio.crear(new IndicadoresDesempenoEntity(indicadoresDesempeno));

    return await indicadoresDesempenoRepositorio.detalle(indicadoresDesempeno.idId);
}

const leerIndicadoresDesempeno = async ()=> {
    return await indicadoresDesempenoRepositorio.leer();
}

const detalleIndicadoresDesempeno = async (idId)=> {
    return await indicadoresDesempenoRepositorio.detalle(idId);
}

const actualizarIndicadoresDesempeno = async (idId, indicadoresDesempeno)=> {

    if(!indicadoresDesempeno.saberSaber || !indicadoresDesempeno.saberHacer ||
        !indicadoresDesempeno.saberSer || !indicadoresDesempeno.idGa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    const indicadoresDesempenoDetalle = await indicadoresDesempenoRepositorio.detalle(idId);

    indicadoresDesempenoDetalle.saberSaber = indicadoresDesempeno.saberSaber;
    indicadoresDesempenoDetalle.saberHacer = indicadoresDesempeno.saberHacer;
    indicadoresDesempenoDetalle.saberSer = indicadoresDesempeno.saberSer;
    indicadoresDesempenoDetalle.idGa = indicadoresDesempeno.idGa;

    await indicadoresDesempenoRepositorio.actualizar(indicadoresDesempenoDetalle);

    return await indicadoresDesempenoRepositorio.detalle(indicadoresDesempenoDetalle.idId);
}

const eliminarIndicadoresDesempeno = async (idId)=> {

    validarRol();
    const indicadoresDesempenoDetalle = await indicadoresDesempenoRepositorio.detalle(idId);

    return await indicadoresDesempenoRepositorio.eliminar(indicadoresDesempenoDetalle.idId);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente.");
    }
}

export default {crearIndicadoresDesempeno, leerIndicadoresDesempeno, detalleIndicadoresDesempeno, actualizarIndicadoresDesempeno, eliminarIndicadoresDesempeno}