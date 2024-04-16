class UnidadCrearReqModel {
    constructor(unidad) {
        this.titulo = unidad.titulo;
        this.competenciaEspecifica = unidad.competenciaEspecifica;
    }
}

class UnidadDatosResModel {
    constructor(unidad) {
        this.idUn = unidad.idUn;
        this.titulo = unidad.titulo;
        this.competenciaEspecifica = unidad.competenciaEspecifica;
        this.idCt = unidad.idCt;
        this.tema = unidad.tema;
        this.subTema = unidad.subTema;
    }
}

class UnidadActualizarReqModel {
    constructor(unidad) {
        this.titulo = unidad.titulo;
        this.competenciaEspecifica = unidad.competenciaEspecifica;
    }
}

class UnidadEntity {
    constructor(unidad) {
        this.idUn = unidad.idUn;
        this.titulo = unidad.titulo;
        this.competenciaEspecifica = unidad.competenciaEspecifica;
    }
}

export {UnidadCrearReqModel, UnidadDatosResModel, UnidadActualizarReqModel, UnidadEntity}