class UsuarioCrearReqModel {
  constructor(usuario) {
    this.nombre = usuario.nombre;
    this.email = usuario.email;
    this.username = usuario.username;
    this.password = usuario.password;
  }
}

class UsuarioDatosResModel {
  constructor(usuario) {
    this.idUsuario = usuario.idUsuario;
    this.nombre = usuario.nombre;
    this.email = usuario.email;
    this.username = usuario.username;
    this.creado = usuario.creado;
  }
}

class UsuarioCarreraAsignada {
  constructor(usuarioCarrera) {
    this.idUsuario = usuarioCarrera.idUsuario;
    this.idCarrera = usuarioCarrera.idCarrera;
  }
}

class UsuarioCarreraAsignadaDatosResModel {
  constructor(usuarioCarrera) {
    this.idUsuario = usuarioCarrera.idUsuario;
    this.idCarrera = usuarioCarrera.idCarrera;
    this.nombre = usuarioCarrera.nombre;
  }
}

class UsuarioRolAsignado {
  constructor(usuarioRol) {
    this.idUsuario = usuarioRol.idUsuario;
    this.idRol = usuarioRol.idRol;
  }
}

class UsuarioRolAsignadoDatosResModel {
  constructor(usuarioRol) {
    this.idUsuario = usuarioRol.idUsuario;
    this.idRol = usuarioRol.idRol;
    this.tipo = usuarioRol.tipo;
  }
}

class UsuarioMicrocurriculoCrearReqModel {
  constructor(usuarioMicrocurriculo) {
    this.idUsuario = usuarioMicrocurriculo.idUsuario;
    this.idMc = usuarioMicrocurriculo.idMc;
  }
}

class UsuarioMicrocurriculoEntity {
  constructor(usuarioMicrocurriculo) {
    this.idUsuario = usuarioMicrocurriculo.idUsuario;
    this.idMc = usuarioMicrocurriculo.idMc;
  }
}

class UsuarioGuiaAprendizajeCrearReqModel {
  constructor(usuarioGuiaAprendizaje) {
    this.idUsuario = usuarioGuiaAprendizaje.idUsuario;
    this.idGa = usuarioGuiaAprendizaje.idGa;
  }
}

class UsuarioGuiaAprendizajeEntity {
  constructor(usuarioGuiaAprendizaje) {
    this.idUsuario = usuarioGuiaAprendizaje.idUsuario;
    this.idGa = usuarioGuiaAprendizaje.idGa;
  }
}

class UsuarioEntity {
  constructor(usuario) {
    this.idUsuario = usuario.idUsuario;
    this.nombre = usuario.nombre;
    this.email = usuario.email;
    this.username = usuario.username;
    this.passwordEncriptada = usuario.passwordEncriptada;
    this.creado = usuario.creado;
  }
}

export { UsuarioCrearReqModel, UsuarioDatosResModel, UsuarioCarreraAsignada, UsuarioRolAsignado,
   UsuarioCarreraAsignadaDatosResModel, UsuarioRolAsignadoDatosResModel, UsuarioEntity, UsuarioMicrocurriculoEntity,
  UsuarioGuiaAprendizajeEntity, UsuarioMicrocurriculoCrearReqModel, UsuarioGuiaAprendizajeCrearReqModel };
