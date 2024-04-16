class LecturaComplementariaCrearReqModel {
    constructor(lecturaComplementaria) {
        this.referenciaLc = lecturaComplementaria.referenciaLc;
        this.idBg = lecturaComplementaria.idBg;
    }
}

class LecturaComplementariaDatosResModel {
    constructor(lecturaComplementaria) {
        this.idLc = lecturaComplementaria.idLc;
        this.referenciaLc = lecturaComplementaria.referenciaLc;
    }
}

class LecturaComplementariaActualizarReqModel {
    constructor(lecturaComplementaria) {
        this.referenciaLc = lecturaComplementaria.referenciaLc;
        this.idBg = lecturaComplementaria.idBg;
    }
}

class LecturaComplementariaEntity {
    constructor(lecturaComplementaria) {
        this.idLc = lecturaComplementaria.idLc;
        this.referenciaLc = lecturaComplementaria.referenciaLc;
        this.idBg = lecturaComplementaria.idBg;
    }
}

export {LecturaComplementariaCrearReqModel, LecturaComplementariaDatosResModel, LecturaComplementariaActualizarReqModel, LecturaComplementariaEntity}