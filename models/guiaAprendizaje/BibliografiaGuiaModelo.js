class BibliografiaGuiaCrearReqModel {
    constructor(bibliografiaGuia) {
        this.referencias = bibliografiaGuia.referencias;
        this.idGa = bibliografiaGuia.idGa;
    }
}

class BibliografiaGuiaDatosResModel {
    constructor(bibliografiaGuia) {
        this.idBgGa = bibliografiaGuia.idBgGa;
        this.referencias = bibliografiaGuia.referencias;
    }
}

class BibliografiaGuiaActualizarReqModel {
    constructor(bibliografiaGuia) {
        this.referencias = bibliografiaGuia.referencias;
        this.idGa = bibliografiaGuia.idGa;
    }
}

class BibliografiaGuiaEntity {
    constructor(bibliografiaGuia) {
        this.idBgGa = bibliografiaGuia.idBgGa;
        this.referencias = bibliografiaGuia.referencias;
        this.idGa = bibliografiaGuia.idGa;
    }
}

export {BibliografiaGuiaCrearReqModel, BibliografiaGuiaDatosResModel, BibliografiaGuiaActualizarReqModel, BibliografiaGuiaEntity}