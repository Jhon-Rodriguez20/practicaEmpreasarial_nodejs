class GlosarioCrearReqModel {
    constructor(glosario) {
        this.palabras = glosario.palabras;
        this.idGa = glosario.idGa;
    }
}

class GlosarioDatosResModel {
    constructor(glosario) {
        this.idGl = glosario.idGl;
        this.palabras = glosario.palabras;
    }
}

class GlosarioActualizarReqModel {
    constructor(glosario) {
        this.palabras = glosario.palabras;
        this.idGa = glosario.idGa;
    }
}

class GlosarioEntity {
    constructor(glosario) {
        this.idGl = glosario.idGl;
        this.palabras = glosario.palabras;
        this.idGa = glosario.idGa;
    }
}

export {GlosarioCrearReqModel, GlosarioDatosResModel, GlosarioActualizarReqModel, GlosarioEntity}