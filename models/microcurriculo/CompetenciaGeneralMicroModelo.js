class CompetenciaGeneralCrearReqModel {
    constructor(competenciaGeneral) {
        this.descripcionCg = competenciaGeneral.descripcionCg;
        this.justificacion = competenciaGeneral.justificacion;
        this.objetivoGeneral = competenciaGeneral.objetivoGeneral;
    }
}

class CompetenciaGeneralDatosResModel {
    constructor(competenciaGeneral) {
        this.idCg = competenciaGeneral.idCg;
        this.descripcionCg = competenciaGeneral.descripcionCg;
        this.justificacion = competenciaGeneral.justificacion;
        this.objetivoGeneral = competenciaGeneral.objetivoGeneral;
    }
}

class CompetenciaGeneralActualizarReqModel {
    constructor(competenciaGeneral) {
        this.descripcionCg = competenciaGeneral.descripcionCg;
        this.justificacion = competenciaGeneral.justificacion;
        this.objetivoGeneral = competenciaGeneral.objetivoGeneral;
    }
}

class CompetenciaGeneralEntity {
    constructor(competenciaGeneral) {
        this.idCg = competenciaGeneral.idCg;
        this.descripcionCg = competenciaGeneral.descripcionCg;
        this.justificacion = competenciaGeneral.justificacion;
        this.objetivoGeneral = competenciaGeneral.objetivoGeneral;
    }
}

export {CompetenciaGeneralCrearReqModel, CompetenciaGeneralDatosResModel, CompetenciaGeneralActualizarReqModel, CompetenciaGeneralEntity}