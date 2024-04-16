class BibliografiaCrearReqModel {
    constructor(bibliografiaMicrocurriculo) {
        
    }
}

class BibliografiaDatosResModel {
    constructor(bibliografiaMicrocurriculo) {
        this.idBg = bibliografiaMicrocurriculo.idBg;
        this.idLb = bibliografiaMicrocurriculo.idLb;
        this.referenciaLb = bibliografiaMicrocurriculo.referenciaLb;
        this.idLc = bibliografiaMicrocurriculo.idLc;
        this.referenciaLc = bibliografiaMicrocurriculo.referenciaLc;
    }
}

class BibliografiaEntity {
    constructor(bibliografiaMicrocurriculo) {
        this.idBg = bibliografiaMicrocurriculo.idBg;
    }
}

export {BibliografiaCrearReqModel, BibliografiaDatosResModel, BibliografiaEntity}