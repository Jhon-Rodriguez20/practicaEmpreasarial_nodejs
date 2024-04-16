class EvaluacionAprendizajeCrearReqModel {
    constructor(evaluacionAprendizaje) {
        this.tipo = evaluacionAprendizaje.tipo;
        this.evidenciasAprendizaje = evaluacionAprendizaje.evidenciasAprendizaje;
    }
}

class EvaluacionAprendizajeDatosResModel {
    constructor(evaluacionAprendizaje) {
        this.idEa = evaluacionAprendizaje.idEa;
        this.tipo = evaluacionAprendizaje.tipo;
        this.evidenciasAprendizaje = evaluacionAprendizaje.evidenciasAprendizaje;
    }
}

class EvaluacionAprendizajeActualizarReqModel {
    constructor(evaluacionAprendizaje) {
        this.tipo = evaluacionAprendizaje.tipo;
        this.evidenciasAprendizaje = evaluacionAprendizaje.evidenciasAprendizaje;
    }
}

class EvaluacionAprendizajeEntity {
    constructor(evaluacionAprendizaje) {
        this.idEa = evaluacionAprendizaje.idEa;
        this.tipo = evaluacionAprendizaje.tipo;
        this.evidenciasAprendizaje = evaluacionAprendizaje.evidenciasAprendizaje;
    }
}

export {EvaluacionAprendizajeCrearReqModel, EvaluacionAprendizajeDatosResModel, EvaluacionAprendizajeActualizarReqModel, EvaluacionAprendizajeEntity}