class CriteriosEvaluacionCrearReqModel {
    constructor(criteriosEvaluacion) {
        this.criterio = criteriosEvaluacion.criterio;
        this.idEa = criteriosEvaluacion.idEa;
    }
}

class CriteriosEvaluacionDatosResModel {
    constructor(criteriosEvaluacion) {
        this.idCea = criteriosEvaluacion.idCea;
        this.criterio = criteriosEvaluacion.criterio;
        this.idEa = criteriosEvaluacion.idEa;
    }
}

class CriteriosEvaluacionActualizarReqModel {
    constructor(criteriosEvaluacion) {
        this.criterio = criteriosEvaluacion.criterio;
        this.idEa = criteriosEvaluacion.idEa;
    }
}

class CriteriosEvaluacionEntity {
    constructor(criteriosEvaluacion) {
        this.idCea = criteriosEvaluacion.idCea;
        this.criterio = criteriosEvaluacion.criterio;
        this.idEa = criteriosEvaluacion.idEa;
    }
}

export {CriteriosEvaluacionCrearReqModel, CriteriosEvaluacionDatosResModel, CriteriosEvaluacionActualizarReqModel, CriteriosEvaluacionEntity}