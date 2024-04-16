import glosarioRepositorio from "../../db/repositorios/guiaAprendizaje/glosarioRepositorio.js";
import usuarioRepositorio from "../../db/repositorios/usuarioRepositorio.js";
import { GlosarioEntity } from "../../models/guiaAprendizaje/GlosarioModelo.js";
import crypto from "crypto";

const crearGlosario = async (glosario)=> {

    if(!glosario.palabras || !glosario.idGa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    glosario.idGl = crypto.randomUUID();

    await glosarioRepositorio.crear(new GlosarioEntity(glosario));

    return await glosarioRepositorio.detalle(glosario.idGl);
}

const leerGlosario = async ()=> {
    return await glosarioRepositorio.leer();
}

const detalleGlosario = async (idGl)=> {
    return await glosarioRepositorio.detalle(idGl);
}

const actualizarGlosario = async (idGl, glosario)=> {

    if(!glosario.palabras || !glosario.idGa) {
        throw new Error("Datos vacios");
    }
    validarRol();

    const glosarioDetalle = await glosarioRepositorio.detalle(idGl);

    glosarioDetalle.palabras = glosario.palabras;
    glosarioDetalle.idGa = glosario.idGa;

    await glosarioRepositorio.actualizar(glosarioDetalle);

    return await glosarioRepositorio.detalle(glosarioDetalle.idGl);
}

const eliminarGlosario = async (idGl)=> {

    validarRol();
    const glosarioDetalle = await glosarioRepositorio.detalle(idGl);

    return await glosarioRepositorio.eliminar(glosarioDetalle.idGl);
}

const validarRol = async (idRol)=> {

    const usuarioRol = await usuarioRepositorio.buscarRolDocente(idRol);
    
    if(!usuarioRol) {
        throw new Error("Accion denegada. Requiere del rol del docente.");
    }
}

export default {crearGlosario, leerGlosario, detalleGlosario, actualizarGlosario, eliminarGlosario}