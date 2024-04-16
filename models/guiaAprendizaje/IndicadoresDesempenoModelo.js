class IndicadoresDesempenoCrearReqModel {
    constructor(indicadoresDesempeno) {
        this.saberSaber = indicadoresDesempeno.saberSaber;
        this.saberHacer = indicadoresDesempeno.saberHacer;
        this.saberSer = indicadoresDesempeno.saberSer;
        this.idGa = indicadoresDesempeno.idGa;
    }
}

class IndicadoresDesempenoDatosResModel {
    constructor(indicadoresDesempeno) {
        this.idId = indicadoresDesempeno.idId;
        this.saberSaber = indicadoresDesempeno.saberSaber;
        this.saberHacer = indicadoresDesempeno.saberHacer;
        this.saberSer = indicadoresDesempeno.saberSer;
        this.idGa = indicadoresDesempeno.idGa;
    }
}

class IndicadoresDesempenoActualizarReqModel {
    constructor(indicadoresDesempeno) {
        this.saberSaber = indicadoresDesempeno.saberSaber;
        this.saberHacer = indicadoresDesempeno.saberHacer;
        this.saberSer = indicadoresDesempeno.saberSer;
        this.idGa = indicadoresDesempeno.idGa;
    }
}

class IndicadoresDesempenoEntity {
    constructor(indicadoresDesempeno) {
        this.idId = indicadoresDesempeno.idId;
        this.saberSaber = indicadoresDesempeno.saberSaber;
        this.saberHacer = indicadoresDesempeno.saberHacer;
        this.saberSer = indicadoresDesempeno.saberSer;
        this.idGa = indicadoresDesempeno.idGa;
    }
}

export {IndicadoresDesempenoCrearReqModel, IndicadoresDesempenoDatosResModel, IndicadoresDesempenoActualizarReqModel, IndicadoresDesempenoEntity}