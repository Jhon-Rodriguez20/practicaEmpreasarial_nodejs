class ComoHacerloDevUnidadCrearReqModel {
    constructor(comoHacerloDevUnidad) {
        this.descripcionCh = comoHacerloDevUnidad.descripcionCh;
        this.idDua = comoHacerloDevUnidad.idDua;
    }
}

class ComoHacerloDevUnidadDatosResModel {
    constructor(comoHacerloDevUnidad) {
        this.idCh = comoHacerloDevUnidad.idCh;
        this.descripcionCh = comoHacerloDevUnidad.descripcionCh;
        this.idDua = comoHacerloDevUnidad.idDua;
    }
}

class ComoHacerloDevUnidadActualizarReqModel {
    constructor(comoHacerloDevUnidad) {
        this.descripcionCh = comoHacerloDevUnidad.descripcionCh;
        this.idDua = comoHacerloDevUnidad.idDua;
    }
}

class ComoHacerloDevUnidadEntity {
    constructor(comoHacerloDevUnidad) {
        this.idCh = comoHacerloDevUnidad.idCh;
        this.descripcionCh = comoHacerloDevUnidad.descripcionCh;
        this.idDua = comoHacerloDevUnidad.idDua;
    }
}

export {ComoHacerloDevUnidadCrearReqModel, ComoHacerloDevUnidadDatosResModel, ComoHacerloDevUnidadActualizarReqModel, ComoHacerloDevUnidadEntity}