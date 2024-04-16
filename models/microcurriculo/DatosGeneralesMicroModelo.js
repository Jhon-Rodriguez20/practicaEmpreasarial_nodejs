class DatosGeneralesCrearReqModel {
  constructor(datosGenerales) {
    this.asignatura = datosGenerales.asignatura;
    this.programa = datosGenerales.programa;
    this.area = datosGenerales.area;
    this.semestre = datosGenerales.semestre;
    this.metodologia = datosGenerales.metodologia;
    this.creditos = datosGenerales.creditos;
    this.horasPresenciales = datosGenerales.horasPresenciales;
    this.horasTrabajoIndependiente = datosGenerales.horasTrabajoIndependiente;
    this.totalHorasAsignatura = datosGenerales.totalHorasAsignatura;
  }
}

class DatosGeneralesDatosResModel {
  constructor(datosGenerales) {
    this.idDg = datosGenerales.idDg;
    this.asignatura = datosGenerales.asignatura;
    this.programa = datosGenerales.programa;
    this.area = datosGenerales.area;
    this.semestre = datosGenerales.semestre;
    this.metodologia = datosGenerales.metodologia;
    this.creditos = datosGenerales.creditos;
    this.horasPresenciales = datosGenerales.horasPresenciales;
    this.horasTrabajoIndependiente = datosGenerales.horasTrabajoIndependiente;
    this.totalHorasAsignatura = datosGenerales.totalHorasAsignatura;
  }
}

class DatosGeneralesActualizarReqModel {
  constructor(datosGenerales) {
    this.asignatura = datosGenerales.asignatura;
    this.programa = datosGenerales.programa;
    this.area = datosGenerales.area;
    this.semestre = datosGenerales.semestre;
    this.metodologia = datosGenerales.metodologia;
    this.creditos = datosGenerales.creditos;
    this.horasPresenciales = datosGenerales.horasPresenciales;
    this.horasTrabajoIndependiente = datosGenerales.horasTrabajoIndependiente;
    this.totalHorasAsignatura = datosGenerales.totalHorasAsignatura;
  }
}

class DatosGeneralesEntity {
  constructor(datosGenerales) {
    this.idDg = datosGenerales.idDg;
    this.asignatura = datosGenerales.asignatura;
    this.programa = datosGenerales.programa;
    this.area = datosGenerales.area;
    this.semestre = datosGenerales.semestre;
    this.metodologia = datosGenerales.metodologia;
    this.creditos = datosGenerales.creditos;
    this.horasPresenciales = datosGenerales.horasPresenciales;
    this.horasTrabajoIndependiente = datosGenerales.horasTrabajoIndependiente;
    this.totalHorasAsignatura = datosGenerales.totalHorasAsignatura;
  }
}

export {DatosGeneralesCrearReqModel, DatosGeneralesDatosResModel, DatosGeneralesActualizarReqModel, DatosGeneralesEntity};