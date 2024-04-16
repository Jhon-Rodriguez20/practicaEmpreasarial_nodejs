class ConocimientosPreviosCrearReqModel {
    constructor(conocimientosPrevios) {
        this.descripcionCp = conocimientosPrevios.descripcionCp;
    }
}

class ConocimientosPreviosDatosResModel {
    constructor(conocimientosPrevios) {
        this.idCp = conocimientosPrevios.idCp;
        this.descripcionCp = conocimientosPrevios.descripcionCp;
    }
}

class ConocimientosPreviosActualizarReqModel {
    constructor(conocimientosPrevios) {
        this.descripcionCp = conocimientosPrevios.descripcionCp;
    }
}

class ConocimientosPreviosEntity {
    constructor(conocimientosPrevios) {
        this.idCp = conocimientosPrevios.idCp;
        this.descripcionCp = conocimientosPrevios.descripcionCp;
    }
}

export {ConocimientosPreviosCrearReqModel, ConocimientosPreviosDatosResModel, ConocimientosPreviosActualizarReqModel, ConocimientosPreviosEntity}