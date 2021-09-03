

import Bhaskara from "./Bhaskara.js";
const mostrar=()=>{
    let a=parseInt(document.getElementById("inp_a").value);
    let b=parseInt(document.getElementById("inp_b").value);
    let c=parseInt(document.getElementById("inp_c").value);
    const bhaskara=new Bhaskara/*(a,b,c);*/
    bhaskara.a0=a;
    bhaskara.b0=b;
    bhaskara.c0=c;
    const raiz_1=bhaskara.calcularRaiz_1();
    const raiz_2=bhaskara.calcularRaiz_2();
    alert(`
    la 1ª raiz es: ${raiz_1}
    La 2ª raiz es: ${raiz_2}`);
}
const boton=document.getElementById("btn_mostrar");
boton.addEventListener("click",mostrar);

