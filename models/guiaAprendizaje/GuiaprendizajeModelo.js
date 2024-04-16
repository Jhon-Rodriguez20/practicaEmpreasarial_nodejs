class GuiaprendizajeCrearReqModel {
    constructor(guiaAprendizaje) {
        this.idPt = guiaAprendizaje.idPt;
        this.idEa = guiaAprendizaje.idEa;
    }
}

class GuiaprendizajeDatosResModel {
    constructor(guiaAprendizaje) {
        this.idGa = guiaAprendizaje.idGa;
        this.fechaCreada = guiaAprendizaje.fechaCreada;
        this.idUsuario = guiaAprendizaje.idUsuario;
        this.nombre = guiaAprendizaje.nombre;
        this.email = guiaAprendizaje.email;
        this.username = guiaAprendizaje.username;
        this.idMc = guiaAprendizaje.idMc;
        this.idDg = guiaAprendizaje.idDg;
        this.programa = guiaAprendizaje.programa;
        this.asignatura = guiaAprendizaje.asignatura;
        this.semestre = guiaAprendizaje.semestre;
        this.metodologia = guiaAprendizaje.metodologia;
        this.horasPresenciales = guiaAprendizaje.horasPresenciales;
        this.horasTrabajoIndependiente = guiaAprendizaje.horasTrabajoIndependiente;
        this.totalHorasAsignatura = guiaAprendizaje.totalHorasAsignatura;
        this.titulo = guiaAprendizaje.titulo;
        this.idPt = guiaAprendizaje.idPt;
        this.descripcionPg = guiaAprendizaje.descripcionPg;
        this.idUn = guiaAprendizaje.idUn;
        this.competenciaEspecifica = guiaAprendizaje.competenciaEspecifica;
        this.idCg = guiaAprendizaje.idCg;
        this.descripcionCg = guiaAprendizaje.descripcionCg;
        this.idId = guiaAprendizaje.idId;
        this.saberSaber = guiaAprendizaje.saberSaber;
        this.saberHacer = guiaAprendizaje.saberHacer;
        this.saberSer = guiaAprendizaje.saberSer;
        this.idDua = guiaAprendizaje.idDua;
        this.fechas = guiaAprendizaje.fechas;
        this.queHacer = guiaAprendizaje.queHacer;
        this.descripcionCh = guiaAprendizaje.descripcionCh;
        this.contenidosTematicos = guiaAprendizaje.contenidosTematicos;
        this.idEa = guiaAprendizaje.idEa;
        this.tipo = guiaAprendizaje.tipo;
        this.evidenciasAprendizaje = guiaAprendizaje.evidenciasAprendizaje;
        this.criterio = guiaAprendizaje.criterio;
        this.instrumento = guiaAprendizaje.instrumento;
        this.idBgGa = guiaAprendizaje.idBgGa;
        this.referencias = guiaAprendizaje.referencias;
        this.idGl = guiaAprendizaje.idGl;
        this.palabras = guiaAprendizaje.palabras;
    }
}

class MicrocurriculoGuiaAprendizajeCrearReqModel {
    constructor(guiaAprendizaje) {
        this.idMc = guiaAprendizaje.idMc;
        this.idGa = guiaAprendizaje.idGa;
    }
}

class GuiaprendizajeActualizarReqModel {
    constructor(guiaAprendizaje) {
        this.idPt = guiaAprendizaje.idPt;
        this.idEa = guiaAprendizaje.idEa;
    }
}

class GuiaprendizajeEntity {
    constructor(guiaAprendizaje) {
        this.idGa = guiaAprendizaje.idGa;
        this.fechaCreada = guiaAprendizaje.fechaCreada;
        this.idPt = guiaAprendizaje.idPt;
        this.idEa = guiaAprendizaje.idEa;
    }
}

export {GuiaprendizajeCrearReqModel, GuiaprendizajeDatosResModel, GuiaprendizajeActualizarReqModel,
      GuiaprendizajeEntity, MicrocurriculoGuiaAprendizajeCrearReqModel}