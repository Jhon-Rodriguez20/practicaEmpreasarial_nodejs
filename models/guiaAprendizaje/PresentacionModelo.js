class PresentacionCrearReqModel {
    constructor(presentacion) {
        this.descripcionPg = presentacion.descripcionPg;
    }
}

class PresentacionDatosResModel {
    constructor(presentacion) {
        this.idPt = presentacion.idPt;
        this.descripcionPg = presentacion.descripcionPg;
    }
}

class PresentacionActualizarReqModel {
    constructor(presentacion) {
        this.descripcionPg = presentacion.descripcionPg;
    }
}

class PresentacionEntity {
    constructor(presentacion) {
        this.idPt = presentacion.idPt;
        this.descripcionPg = presentacion.descripcionPg;
    }
}

export {PresentacionCrearReqModel, PresentacionDatosResModel, PresentacionActualizarReqModel, PresentacionEntity}