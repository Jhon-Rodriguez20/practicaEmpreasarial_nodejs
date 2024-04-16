class InstrumentosEvaluacionCrearReqModel {
    constructor(instrumentosEvaluacion) {
        this.instrumento = instrumentosEvaluacion.instrumento;
        this.idEa = instrumentosEvaluacion.idEa;
    }
}

class InstrumentosEvaluacionDatosResModel {
    constructor(instrumentosEvaluacion) {
        this.idIea = instrumentosEvaluacion.idIea;
        this.instrumento = instrumentosEvaluacion.instrumento;
        this.idEa = instrumentosEvaluacion.idEa;
    }
}

class InstrumentosEvaluacionActualizarReqModel {
    constructor(instrumentosEvaluacion) {
        this.instrumento = instrumentosEvaluacion.instrumento;
        this.idEa = instrumentosEvaluacion.idEa;
    }
}

class InstrumentosEvaluacionEntity {
    constructor(instrumentosEvaluacion) {
        this.idIea = instrumentosEvaluacion.idIea;
        this.instrumento = instrumentosEvaluacion.instrumento;
        this.idEa = instrumentosEvaluacion.idEa;
    }
}

export {InstrumentosEvaluacionCrearReqModel, InstrumentosEvaluacionDatosResModel, InstrumentosEvaluacionActualizarReqModel, InstrumentosEvaluacionEntity}