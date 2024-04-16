class ContenidoTematicoCrearReqModel {
    constructor(contenidoTematico) {
        this.tema = contenidoTematico.tema;
        this.subTema = contenidoTematico.subTema;
        this.idUn = contenidoTematico.idUn;
    }
}

class ContenidoTematicoDatosResModel {
    constructor(contenidoTematico) {
        this.idCt = contenidoTematico.idCt;
        this.tema = contenidoTematico.tema;
        this.subTema = contenidoTematico.subTema;
    }
}

class ContenidoTematicoActualizarReqModel {
    constructor(contenidoTematico) {
        this.tema = contenidoTematico.tema;
        this.subTema = contenidoTematico.subTema;
        this.idUn = contenidoTematico.idUn;
    }
}

class ContenidoTematicoEntity {
    constructor(contenidoTematico) {
        this.idCt = contenidoTematico.idCt;
        this.tema = contenidoTematico.tema;
        this.subTema = contenidoTematico.subTema;
        this.idUn = contenidoTematico.idUn;
    }
}

export {ContenidoTematicoCrearReqModel, ContenidoTematicoDatosResModel, ContenidoTematicoActualizarReqModel, ContenidoTematicoEntity}