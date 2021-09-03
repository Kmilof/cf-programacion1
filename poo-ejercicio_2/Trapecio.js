

export default class Trapecio{
    a;
    b;
    h;
    constructor(A,B,H){
        this.a=A;
        this.b=B;
        this.h=H;
    }
    calcularTrapecio(){
        let resultado=((this.a+this.b)/2)*(this.h);
        return resultado;
    }
}

