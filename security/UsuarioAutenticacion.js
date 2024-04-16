import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import usuarioServicio from "../services/usuarioServicio.js";
import jwt from "jsonwebtoken";
import { variables } from "../utils/variables.js";
import constantesSeguridad from "./constantesSeguridad.js";

const crearToken = (usuario) => {
    const payload = {
        sub: usuario.idUsuario,
        name: usuario.nombre,
        exp: new Date().getTime() + constantesSeguridad.FECHA_EXPIRACION
    }
    return jwt.sign(payload, variables.TOKEN_SECRETO);
}

const localEstrategia = new LocalStrategy({ usernameField: "username", passwordField: "password" },

    async (username, password, callback) => {
        
        try {
            const usuario = await usuarioServicio.leerUsuarioLogin(username);
            const similar = await bcrypt.compare(password, usuario.passwordEncriptada);

            if (!similar) {
                callback(null, { error: "Contraseña incorrecta" });
            } else {
                const token = crearToken(usuario);
                callback(null, usuario, token);
            }
        } catch (err) {
            callback(null, { error: "No se encuentra el usuario" });
        }
    }
);

export default {localEstrategia}