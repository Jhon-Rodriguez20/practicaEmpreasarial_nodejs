import passport from "passport";
import UsuarioAutenticacion from "./UsuarioAutenticacion.js";
import { microcurriculoRutas } from "../routes/microcurriculoRutas.js";
import { guiaAprendizajeRutas } from "../routes/guiaAprendizajeRutas.js";
import { usuarioRutas } from "../routes/usuarioRutas.js";
import TokenAutorizacion from "./TokenAutorizacion.js";
import cors from "cors";

const whiteList= ["http://localhost:3000"]

const opcionesCors = {
    "origin": (origen, callback)=> {
        if(whiteList.indexOf(origen) != -1 || !origen) {
            callback(null, true)
        } else {
            callback(new Error("No permitido por cors"))
        }
    },
    "allowedHeaders": "*",
    "methods": "*"
}

const configuracionSeguridad = (app)=> {

    app.use(cors(opcionesCors));
    app.use("/usuario", usuarioRutas);
    app.use("/microcurriculo", microcurriculoRutas);
    app.use("/", guiaAprendizajeRutas);
    passport.use(UsuarioAutenticacion.localEstrategia);
    passport.use(TokenAutorizacion.jwtEstrategia);
}

export {configuracionSeguridad}