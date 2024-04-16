import { ExtractJwt, Strategy } from "passport-jwt";
import { variables } from "../utils/variables.js";

const opciones={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: variables.TOKEN_SECRETO
}

const jwtEstrategia= new Strategy(opciones, (payload, callback)=> {

    if(payload.sub != null) {
        callback(null, payload)
    } else {
        callback(null, {error: "Token invalido"})
    }
})

export default {jwtEstrategia}