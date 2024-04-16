class LecturaBasicaCrearReqModel {
    constructor(lecturaBasica) {
        this.referenciaLb = lecturaBasica.referenciaLb;
        this.idBg = lecturaBasica.idBg;
    }
}

class LecturaBasicaDatosResModel {
    constructor(lecturaBasica) {
        this.idLb = lecturaBasica.idLb;
        this.referenciaLb = lecturaBasica.referenciaLb;
    }
}

class LecturaBasicaActualizarReqModel {
    constructor(lecturaBasica) {
        this.referenciaLb = lecturaBasica.referenciaLb;
        this.idBg = lecturaBasica.idBg;
    }
}

class LecturaBasicaEntity {
    constructor(lecturaBasica) {
        this.idLb = lecturaBasica.idLb;
        this.referenciaLb = lecturaBasica.referenciaLb;
        this.idBg = lecturaBasica.idBg;
    }
}

export {LecturaBasicaCrearReqModel, LecturaBasicaDatosResModel, LecturaBasicaActualizarReqModel, LecturaBasicaEntity}