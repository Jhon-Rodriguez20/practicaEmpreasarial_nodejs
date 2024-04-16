import { Router } from "express";
import passport from "passport";
import presentacionControlador from "../controllers/guiaAprendizaje/presentacionControlador.js";
import indicadoresDesempenoControlador from "../controllers/guiaAprendizaje/indicadoresDesempenoControlador.js";
import desarrolloUnidadControlador from "../controllers/guiaAprendizaje/desarrolloUnidadControlador.js";
import comoHacerloDevUnidadControlador from "../controllers/guiaAprendizaje/comoHacerloDevUnidadControlador.js";
import evaluacionAprendizajeControlador from "../controllers/guiaAprendizaje/evaluacionAprendizajeControlador.js";
import criteriosEvaluacionControlador from "../controllers/guiaAprendizaje/criteriosEvaluacionControlador.js";
import instrumentosEvaluacionControlador from "../controllers/guiaAprendizaje/instrumentosEvaluacionControlador.js";
import bibliografiaGuiaControlador from "../controllers/guiaAprendizaje/bibliografiaGuiaControlador.js";
import glosarioControlador from "../controllers/guiaAprendizaje/glosarioControlador.js";
import guiaprendizajeControlador from "../controllers/guiaAprendizaje/guiaprendizajeControlador.js";

const guiaAprendizajeRutas = Router();

guiaAprendizajeRutas.post("/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    guiaprendizajeControlador.postGuiaAprendizaje)

guiaAprendizajeRutas.get("/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    guiaprendizajeControlador.getGuiaAprendizaje)

guiaAprendizajeRutas.get("/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    guiaprendizajeControlador.getDetalleGuiaAprendizaje)

guiaAprendizajeRutas.put("/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    guiaprendizajeControlador.putGuiaAprendizaje)

guiaAprendizajeRutas.delete("/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    guiaprendizajeControlador.deleteGuiaAprendizaje)

guiaAprendizajeRutas.post("/presentacion/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    presentacionControlador.postPresentacion)

guiaAprendizajeRutas.get("/presentacion/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    presentacionControlador.getPresentacion)

guiaAprendizajeRutas.get("/presentacion/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    presentacionControlador.getDetallePresentacion)

guiaAprendizajeRutas.put("/presentacion/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    presentacionControlador.putPresentacion)

guiaAprendizajeRutas.delete("/presentacion/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    presentacionControlador.deletePresentacion)

guiaAprendizajeRutas.post("/indicadoresDesempeno/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    indicadoresDesempenoControlador.postIndicadoresDesempeno)

guiaAprendizajeRutas.get("/indicadoresDesempeno/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    indicadoresDesempenoControlador.getIndicadoresDesempeno)

guiaAprendizajeRutas.get("/indicadoresDesempeno/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    indicadoresDesempenoControlador.getDetalleIndicadoresDesempeno)

guiaAprendizajeRutas.put("/indicadoresDesempeno/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    indicadoresDesempenoControlador.putIndicadoresDesempeno)

guiaAprendizajeRutas.delete("/indicadoresDesempeno/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    indicadoresDesempenoControlador.deleteIndicadoresDesempeno)

guiaAprendizajeRutas.post("/desarrolloUnidad/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    desarrolloUnidadControlador.postDesarrolloUnidad)

guiaAprendizajeRutas.get("/desarrolloUnidad/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    desarrolloUnidadControlador.getDesarrolloUnidad)

guiaAprendizajeRutas.get("/desarrolloUnidad/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    desarrolloUnidadControlador.getDetalleDesarrolloUnidad)

guiaAprendizajeRutas.put("/desarrolloUnidad/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    desarrolloUnidadControlador.putDesarrolloUnidad)

guiaAprendizajeRutas.delete("/desarrolloUnidad/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    desarrolloUnidadControlador.deleteDesarrolloUnidad)

guiaAprendizajeRutas.post("/desarrolloUnidad/comoHacerlo/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    comoHacerloDevUnidadControlador.postComoHacerloDevUnidad)

guiaAprendizajeRutas.get("/desarrolloUnidad/comoHacerlo/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    comoHacerloDevUnidadControlador.getComoHacerloDevUnidad)

guiaAprendizajeRutas.get("/desarrolloUnidad/comoHacerlo/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    comoHacerloDevUnidadControlador.getDetalleComoHacerloDevUnidad)

guiaAprendizajeRutas.put("/desarrolloUnidad/comoHacerlo/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    comoHacerloDevUnidadControlador.putComoHacerloDevUnidad)

guiaAprendizajeRutas.delete("/desarrolloUnidad/comoHacerlo/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    comoHacerloDevUnidadControlador.deleteComoHacerloDevUnidad)

guiaAprendizajeRutas.post("/evaluacionAprendizaje/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    evaluacionAprendizajeControlador.postEvaluacionAprendizaje)

guiaAprendizajeRutas.get("/evaluacionAprendizaje/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    evaluacionAprendizajeControlador.getEvaluacionAprendizaje)

guiaAprendizajeRutas.get("/evaluacionAprendizaje/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    evaluacionAprendizajeControlador.getDetalleEvaluacionAprendizaje)

guiaAprendizajeRutas.put("/evaluacionAprendizaje/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    evaluacionAprendizajeControlador.putEvaluacionAprendizaje)

guiaAprendizajeRutas.delete("/evaluacionAprendizaje/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    evaluacionAprendizajeControlador.deleteEvaluacionAprendizaje)

guiaAprendizajeRutas.post("/criteriosEvaluacion/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    criteriosEvaluacionControlador.postCriteriosEvaluacion)

guiaAprendizajeRutas.get("/criteriosEvaluacion/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    criteriosEvaluacionControlador.getCriteriosEvaluacion)

guiaAprendizajeRutas.get("/criteriosEvaluacion/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    criteriosEvaluacionControlador.getDetalleCriteriosEvaluacion)

guiaAprendizajeRutas.put("/criteriosEvaluacion/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    criteriosEvaluacionControlador.putCriteriosEvaluacion)

guiaAprendizajeRutas.delete("/criteriosEvaluacion/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    criteriosEvaluacionControlador.deleteCriteriosEvaluacion)

guiaAprendizajeRutas.post("/instrumentosEvaluacion/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    instrumentosEvaluacionControlador.postInstrumentosEvaluacion)

guiaAprendizajeRutas.get("/instrumentosEvaluacion/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    instrumentosEvaluacionControlador.getInstrumentosEvaluacion)

guiaAprendizajeRutas.get("/instrumentosEvaluacion/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    instrumentosEvaluacionControlador.getDetalleInstrumentosEvaluacion)

guiaAprendizajeRutas.put("/instrumentosEvaluacion/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    instrumentosEvaluacionControlador.putInstrumentosEvaluacion)

guiaAprendizajeRutas.delete("/instrumentosEvaluacion/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    instrumentosEvaluacionControlador.deleteInstrumentosEvaluacion)

guiaAprendizajeRutas.post("/bibliografia/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    bibliografiaGuiaControlador.postBibliografiaGuia)

guiaAprendizajeRutas.get("/bibliografia/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    bibliografiaGuiaControlador.getBibliografiaGuia)

guiaAprendizajeRutas.get("/bibliografia/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    bibliografiaGuiaControlador.getDetalleBibliografiaGuia)

guiaAprendizajeRutas.put("/bibliografia/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    bibliografiaGuiaControlador.putBibliografiaGuia)

guiaAprendizajeRutas.delete("/bibliografia/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    bibliografiaGuiaControlador.deleteBibliografiaGuia)

guiaAprendizajeRutas.post("/glosario/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    glosarioControlador.postGlosario)

guiaAprendizajeRutas.get("/glosario/guiaAprendizaje",
    passport.authenticate("jwt", {session: false}),
    glosarioControlador.getGlosario)

guiaAprendizajeRutas.get("/glosario/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    glosarioControlador.getDetalleGlosario)

guiaAprendizajeRutas.put("/glosario/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    glosarioControlador.putGlosario)

guiaAprendizajeRutas.delete("/glosario/guiaAprendizaje/:id",
    passport.authenticate("jwt", {session: false}),
    glosarioControlador.deleteGlosario)

export {guiaAprendizajeRutas}