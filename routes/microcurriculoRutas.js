import { Router } from "express";
import passport from "passport";
import microcurriculoControlador from '../controllers/microcurriculo/microcurriculoControlador.js';
import datosGeneralesMicroControlador from "../controllers/microcurriculo/datosGeneralesMicroControlador.js";
import competenciaGeneralMicroControlador from "../controllers/microcurriculo/competenciaGeneralMicroControlador.js";
import articulacionSaberesMicroControlador from "../controllers/microcurriculo/articulacionSaberesMicroControlador.js";
import conocimientosPreviosMicroControlador from "../controllers/microcurriculo/conocimientosPreviosMicroControlador.js";
import unidadMicroControlador from "../controllers/microcurriculo/unidadMicroControlador.js";
import contenidoTematicoMicroControlador from "../controllers/microcurriculo/contenidoTematicoMicroControlador.js";
import bibliografiaMicroControlador from "../controllers/microcurriculo/bibliografiaMicroControlador.js";
import lecturaBasicaMicroControlador from "../controllers/microcurriculo/lecturaBasicaMicroControlador.js";
import lecturaComplementariaMicroControlador from "../controllers/microcurriculo/lecturaComplementariaMicroControlador.js";

const microcurriculoRutas = Router();

microcurriculoRutas.post("/",
    passport.authenticate("jwt", {session: false}),
    microcurriculoControlador.postMicrocurriculo)

microcurriculoRutas.get("/",
    passport.authenticate("jwt", {session: false}),
    microcurriculoControlador.getMicrocurriculo)

microcurriculoRutas.get("/:id",
    passport.authenticate("jwt", {session: false}),
    microcurriculoControlador.getDetalleMicrocurriculo)

microcurriculoRutas.put("/:id",
    passport.authenticate("jwt", {session: false}),
    microcurriculoControlador.putMicrocurriculo)

microcurriculoRutas.delete("/:id",
    passport.authenticate("jwt", {session: false}),
    microcurriculoControlador.deleteMicrocurriculo)


microcurriculoRutas.post("/datosGenerales",
    passport.authenticate("jwt", {session: false}),
    datosGeneralesMicroControlador.postDatosGenerales)

microcurriculoRutas.get("/datosGenerales",
    passport.authenticate("jwt", {session: false}),
    datosGeneralesMicroControlador.getDatosGenerales)

microcurriculoRutas.get("/datosGenerales/:id",
    passport.authenticate("jwt", {session: false}),
    datosGeneralesMicroControlador.getDetalleDatosGenerales)

microcurriculoRutas.put("/datosGenerales/:id",
    passport.authenticate("jwt", {session: false}),
    datosGeneralesMicroControlador.putDatosGenerales)

microcurriculoRutas.delete("/datosGenerales/:id",
    passport.authenticate("jwt", {session: false}),
    datosGeneralesMicroControlador.deleteDatosGenerales)


microcurriculoRutas.post("/competenciaGeneral",
    passport.authenticate("jwt", {session: false}),
    competenciaGeneralMicroControlador.postCompetenciaGeneral)

microcurriculoRutas.get("/competenciaGeneral",
    passport.authenticate("jwt", {session: false}),
    competenciaGeneralMicroControlador.getCompetenciaGeneral)

microcurriculoRutas.get("/competenciaGeneral/:id",
    passport.authenticate("jwt", {session: false}),
    competenciaGeneralMicroControlador.getDetalleCompetenciaGeneral)

microcurriculoRutas.put("/competenciaGeneral/:id",
    passport.authenticate("jwt", {session: false}),
    competenciaGeneralMicroControlador.putCompetenciaGeneral)

microcurriculoRutas.delete("/competenciaGeneral/:id",
    passport.authenticate("jwt", {session: false}),
    competenciaGeneralMicroControlador.deleteCompetenciaGeneral)


microcurriculoRutas.post("/articulacionSaberes",
    passport.authenticate("jwt", {session: false}),
    articulacionSaberesMicroControlador.postArticulacionSaberes)

microcurriculoRutas.get("/articulacionSaberes",
    passport.authenticate("jwt", {session: false}),
    articulacionSaberesMicroControlador.getArticulacionSaberes)

microcurriculoRutas.get("/articulacionSaberes/:id",
    passport.authenticate("jwt", {session: false}),
    articulacionSaberesMicroControlador.getDetalleArticulacionSaberes)

microcurriculoRutas.put("/articulacionSaberes/:id",
    passport.authenticate("jwt", {session: false}),
    articulacionSaberesMicroControlador.putArticulacionSaberes)

microcurriculoRutas.delete("/articulacionSaberes/:id",
    passport.authenticate("jwt", {session: false}),
    articulacionSaberesMicroControlador.deleteArticulacionSaberes)


microcurriculoRutas.post("/conocimientosPrevios",
    passport.authenticate("jwt", {session: false}),
    conocimientosPreviosMicroControlador.postConocimientosPrevios)

microcurriculoRutas.get("/conocimientosPrevios",
    passport.authenticate("jwt", {session: false}),
    conocimientosPreviosMicroControlador.getConocimientosPrevios)

microcurriculoRutas.get("/conocimientosPrevios/:id",
    passport.authenticate("jwt", {session: false}),
    conocimientosPreviosMicroControlador.getDetalleConocimientosPrevios)

microcurriculoRutas.put("/conocimientosPrevios/:id",
    passport.authenticate("jwt", {session: false}),
    conocimientosPreviosMicroControlador.putConocimientosPrevios)

microcurriculoRutas.delete("/conocimientosPrevios/:id",
    passport.authenticate("jwt", {session: false}),
    conocimientosPreviosMicroControlador.deleteConocimientosPrevios)


microcurriculoRutas.post("/unidad",
    passport.authenticate("jwt", {session: false}),
    unidadMicroControlador.postUnidadMicrocurriculo)

microcurriculoRutas.get("/unidad",
    passport.authenticate("jwt", {session: false}),
    unidadMicroControlador.getUnidadMicrocurriculo)

microcurriculoRutas.get("/unidad/:id",
    passport.authenticate("jwt", {session: false}),
    unidadMicroControlador.getDetalleUnidadMicrocurriculo)

microcurriculoRutas.put("/unidad/:id",
    passport.authenticate("jwt", {session: false}),
    unidadMicroControlador.putUnidadMicrocurriculo)

microcurriculoRutas.delete("/unidad/:id",
    passport.authenticate("jwt", {session: false}),
    unidadMicroControlador.deleteUnidadMicrocurriculo)


microcurriculoRutas.post("/contenidoTematico",
    passport.authenticate("jwt", {session: false}),
    contenidoTematicoMicroControlador.postContenidoTematico)

microcurriculoRutas.get("/contenidoTematico",
    passport.authenticate("jwt", {session: false}),
    contenidoTematicoMicroControlador.getContenidoTematico)

microcurriculoRutas.get("/contenidoTematico/:id",
    passport.authenticate("jwt", {session: false}),
    contenidoTematicoMicroControlador.getDetalleContenidoTematico)

microcurriculoRutas.put("/contenidoTematico/:id",
    passport.authenticate("jwt", {session: false}),
    contenidoTematicoMicroControlador.putContenidoTematico)

microcurriculoRutas.delete("/contenidoTematico/:id",
    passport.authenticate("jwt", {session: false}),
    contenidoTematicoMicroControlador.deleteContenidoTematico)


microcurriculoRutas.post("/bibliografia",
    passport.authenticate("jwt", {session: false}),
    bibliografiaMicroControlador.postBibliografia)

microcurriculoRutas.get("/bibliografia",
    passport.authenticate("jwt", {session: false}),
    bibliografiaMicroControlador.getBibliografia)

microcurriculoRutas.get("/bibliografia/:id",
    passport.authenticate("jwt", {session: false}),
    bibliografiaMicroControlador.getDetalleBibliografia)

microcurriculoRutas.delete("/bibliografia/:id",
    passport.authenticate("jwt", {session: false}),
    bibliografiaMicroControlador.deleteBibliografia)


microcurriculoRutas.post("/bibliografia/lecturaBasica",
    passport.authenticate("jwt", {session: false}),
    lecturaBasicaMicroControlador.postLecturaBasica)

microcurriculoRutas.get("/bibliografia/lecturaBasica",
    passport.authenticate("jwt", {session: false}),
    lecturaBasicaMicroControlador.getLecturaBasica)

microcurriculoRutas.get("/bibliografia/lecturaBasica/:id",
    passport.authenticate("jwt", {session: false}),
    lecturaBasicaMicroControlador.getDetalleLecturaBasica)

microcurriculoRutas.put("/bibliografia/lecturaBasica/:id",
    passport.authenticate("jwt", {session: false}),
    lecturaBasicaMicroControlador.putLecturaBasica)

microcurriculoRutas.delete("/bibliografia/lecturaBasica/:id",
    passport.authenticate("jwt", {session: false}),
    lecturaBasicaMicroControlador.deleteLecturaBasica)


microcurriculoRutas.post("/bibliografia/lecturaComplementaria",
    passport.authenticate("jwt", {session: false}),
    lecturaComplementariaMicroControlador.postLecturaComplementaria)

microcurriculoRutas.get("/bibliografia/lecturaComplementaria",
    passport.authenticate("jwt", {session: false}),
    lecturaComplementariaMicroControlador.getLecturaComplementaria)

microcurriculoRutas.get("/bibliografia/lecturaComplementaria/:id",
    passport.authenticate("jwt", {session: false}),
    lecturaComplementariaMicroControlador.getDetalleLecturaComplementaria)

microcurriculoRutas.put("/bibliografia/lecturaComplementaria/:id",
    passport.authenticate("jwt", {session: false}),
    lecturaComplementariaMicroControlador.putLecturaComplementaria)

microcurriculoRutas.delete("/bibliografia/lecturaComplementaria/:id",
    passport.authenticate("jwt", {session: false}),
    lecturaComplementariaMicroControlador.deleteLecturaComplementaria)

export {microcurriculoRutas}