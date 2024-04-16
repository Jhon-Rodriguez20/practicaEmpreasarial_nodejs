import { Router } from "express";
import passport from "passport";
import usuarioControlador from "../controllers/usuarioControlador.js";

const usuarioRutas = Router();

usuarioRutas.post("/",
    passport.authenticate("jwt", {session: false}),
    usuarioControlador.postUsuario)

usuarioRutas.post("/usuarioCarrera",
    passport.authenticate("jwt", {session: false}),
    usuarioControlador.asignarCarrera)

usuarioRutas.post("/usuarioRol",
    passport.authenticate("jwt", {session: false}),
    usuarioControlador.asignarRol)

usuarioRutas.get("/",
    passport.authenticate("jwt", {session: false}),
    usuarioControlador.getUsuario)

usuarioRutas.get("/mismicrocurriculos",
    passport.authenticate("jwt", {session: false}),
    usuarioControlador.getMisMicrocurriculos)

usuarioRutas.get("/misGuiasAprendizaje",
    passport.authenticate("jwt", {session: false}),
    usuarioControlador.getMisGuiasAprendizaje)

usuarioRutas.post("/login",
    passport.authenticate('local', {session: false}),
    usuarioControlador.postSignin)

export {usuarioRutas}