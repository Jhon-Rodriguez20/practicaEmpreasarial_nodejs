class MicrocurriculoCrearReqModel {
    constructor(microcurriculo) {
        this.idDg = microcurriculo.idDg;
        this.idCg = microcurriculo.idCg;
        this.idAs = microcurriculo.idAs;
        this.idCp = microcurriculo.idCp;
        this.idUn = microcurriculo.idUn;
        this.idBg = microcurriculo.idBg;
    }
}

class MicrocurriculoDatosResModel {
    constructor(microcurriculo) {
        this.idMc = microcurriculo.idMc;
        this.fechaCreado = microcurriculo.fechaCreado;
        this.idUsuario = microcurriculo.idUsuario;
        this.nombre = microcurriculo.nombre;
        this.email = microcurriculo.email;
        this.username = microcurriculo.username;
        this.idDg = microcurriculo.idDg;
        this.asignatura = microcurriculo.asignatura;
        this.programa = microcurriculo.programa;
        this.area = microcurriculo.area;
        this.semestre = microcurriculo.semestre;
        this.metodologia = microcurriculo.metodologia;
        this.creditos = microcurriculo.creditos;
        this.horasPresenciales = microcurriculo.horasPresenciales;
        this.horasTrabajoIndependiente = microcurriculo.horasTrabajoIndependiente;
        this.totalHorasAsignatura = microcurriculo.totalHorasAsignatura;
        this.idCg = microcurriculo.idCg;
        this.descripcionCg = microcurriculo.descripcionCg;
        this.justificacion = microcurriculo.justificacion;
        this.objetivoGeneral = microcurriculo.objetivoGeneral;
        this.idAs = microcurriculo.idAs;
        this.descripcionAs = microcurriculo.descripcionAs;
        this.idCp = microcurriculo.idCp;
        this.descripcionCp = microcurriculo.descripcionCp;
        this.idUn = microcurriculo.idUn;
        this.titulo = microcurriculo.titulo;
        this.competenciaEspecifica = microcurriculo.competenciaEspecifica;
        this.idCt = microcurriculo.idCt;
        this.tema = microcurriculo.tema;
        this.subTema = microcurriculo.subTema;
        this.idBg = microcurriculo.idBg;
        this.idLb = microcurriculo.idLb;
        this.referenciaLb = microcurriculo.referenciaLb;
        this.idLc = microcurriculo.idLc;
        this.referenciaLc = microcurriculo.referenciaLc;
    }
}

class MicrocurriculoUsuarioDatosResModel {
    constructor(usuarioMicrocurriculo) {
        this.idMc = usuarioMicrocurriculo.idMc;
        this.idUsuario = usuarioMicrocurriculo.idUsuario;
    }
}

class MicrocurriculoActualizarReqModel {
    constructor(microcurriculo) {
        this.idDg = microcurriculo.idDg;
        this.idCg = microcurriculo.idCg;
        this.idAs = microcurriculo.idAs;
        this.idCp = microcurriculo.idCp;
        this.idUn = microcurriculo.idUn;
        this.idBg = microcurriculo.idBg;
    }
}

class MicrocurriculoEntity {
    constructor(microcurriculo) {
        this.idMc = microcurriculo.idMc;
        this.fechaCreado = microcurriculo.fechaCreado;
        this.idDg = microcurriculo.idDg;
        this.idCg = microcurriculo.idCg;
        this.idAs = microcurriculo.idAs;
        this.idCp = microcurriculo.idCp;
        this.idUn = microcurriculo.idUn;
        this.idBg = microcurriculo.idBg;
    }
}

export { MicrocurriculoCrearReqModel, MicrocurriculoDatosResModel, MicrocurriculoUsuarioDatosResModel, MicrocurriculoActualizarReqModel, MicrocurriculoEntity }