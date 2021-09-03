

export default class Circunferencia{
    radio_01;
    constructor(radio){
        this.radio_01=radio;
    }
    calcularCircunferencia(){
        let resultado=(3.14)*(Math.pow(this.radio_01,2));
        return resultado;
    }
}


