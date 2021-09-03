

export default class Triangulo{
    base;
    altura;
    constructor(BASE,ALTURA){
        this.base=BASE;
        this.altura=ALTURA;
    }
    calcularTriangulo(){
        let resultado=(this.base*this.altura)/2;
        return resultado;
    }
}

