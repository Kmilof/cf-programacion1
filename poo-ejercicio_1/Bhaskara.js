

export default class Bhaskara{
    a0;
    b0;
    c0;
    /*constructor(a,b,c){
        this.a0=a;
        this.b0=b;
        this.c0=c;
    }*/
    calcularRaiz_1(){
    let resultado_1=(-this.b0+(Math.sqrt((Math.pow(this.b0,2))-(4*this.a0*this.c0))))/(2*this.a0);
    return resultado_1;
    }
    calcularRaiz_2(){
    let resultado_2=(-this.b0-(Math.sqrt((Math.pow(this.b0,2))-(4*this.a0*this.c0))))/(2*this.a0);
    return resultado_2;
    }
}
