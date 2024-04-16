class DesarrolloUnidadCrearReqModel {
    constructor(desarrolloUnidad) {
        this.fechas = desarrolloUnidad.fechas;
        this.queHacer = desarrolloUnidad.queHacer;
        this.contenidosTematicos = desarrolloUnidad.contenidosTematicos;
        this.idGa = desarrolloUnidad.idGa;
    }
}

class DesarrolloUnidadDatosResModel {
    constructor(desarrolloUnidad) {
        this.idDua = desarrolloUnidad.idDua;
        this.fechas = desarrolloUnidad.fechas;
        this.queHacer = desarrolloUnidad.queHacer;
        this.contenidosTematicos = desarrolloUnidad.contenidosTematicos;
        this.idGa = desarrolloUnidad.idGa;
    }
}

class DesarrolloUnidadActualizarReqModel {
    constructor(desarrolloUnidad) {
        this.fechas = desarrolloUnidad.fechas;
        this.queHacer = desarrolloUnidad.queHacer;
        this.contenidosTematicos = desarrolloUnidad.contenidosTematicos;
        this.idGa = desarrolloUnidad.idGa;
    }
}

class DesarrolloUnidadEntity {
    constructor(desarrolloUnidad) {
        this.idDua = desarrolloUnidad.idDua;
        this.fechas = desarrolloUnidad.fechas;
        this.queHacer = desarrolloUnidad.queHacer;
        this.contenidosTematicos = desarrolloUnidad.contenidosTematicos;
        this.idGa = desarrolloUnidad.idGa;
    }
}

export {DesarrolloUnidadCrearReqModel, DesarrolloUnidadDatosResModel, DesarrolloUnidadActualizarReqModel, DesarrolloUnidadEntity}