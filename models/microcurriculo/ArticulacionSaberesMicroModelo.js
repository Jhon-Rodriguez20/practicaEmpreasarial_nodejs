class ArticulacionSaberesCrearReqModel {
    constructor(articulacionSaberes) {
        this.descripcionAs = articulacionSaberes.descripcionAs;
    }
}

class ArticulacionSaberesDatosResModel {
    constructor(articulacionSaberes) {
        this.idAs = articulacionSaberes.idAs;
        this.descripcionAs = articulacionSaberes.descripcionAs;
    }
}

class ArticulacionSaberesActualizarReqModel {
    constructor(articulacionSaberes) {
        this.descripcionAs = articulacionSaberes.descripcionAs;
    }
}

class ArticulacionSaberesEntity {
    constructor(articulacionSaberes) {
        this.idAs = articulacionSaberes.idAs;
        this.descripcionAs = articulacionSaberes.descripcionAs;
    }
}

export {ArticulacionSaberesCrearReqModel, ArticulacionSaberesDatosResModel, ArticulacionSaberesActualizarReqModel, ArticulacionSaberesEntity}