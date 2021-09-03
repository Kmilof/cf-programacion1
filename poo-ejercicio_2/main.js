

import Circunferencia from "./Circunferencia.js";
const mostrar_circunferencia=()=>{
    let radio=parseInt(document.getElementById("inp_radio").value);
    const circunferencia=new Circunferencia(radio);
    const resultado_1=circunferencia.calcularCircunferencia();
    alert("el area de la circunferencia es: "+resultado_1);
}
const boton_circunferencia=document.getElementById("btn_circunferencia");
boton_circunferencia.addEventListener("click",mostrar_circunferencia);


import Triangulo from "./Triangulo.js";
const mostrar_triangulo=()=>{
    let BASE=parseInt(document.getElementById("inp_base").value);
    let ALTURA=parseInt(document.getElementById("inp_altura").value);
    const area_triangulo=new Triangulo(BASE,ALTURA);
    const resultado_2=area_triangulo.calcularTriangulo();
    alert("el area del triangulo es: "+resultado_2);
}
const boton_triangulo=document.getElementById("btn_triangulo");
boton_triangulo.addEventListener("click",mostrar_triangulo);


import Trapecio from "./Trapecio.js";
const mostrar_trapecio=()=>{
    let A=parseInt(document.getElementById("inp_a").value);
    let B=parseInt(document.getElementById("inp_b").value);
    let H=parseInt(document.getElementById("inp_h").value);
    const area_trapecio=new Trapecio(A,B,H);
    const resultado_3=area_trapecio.calcularTrapecio();
    alert("el area del trapecio es: "+resultado_3);
}
const boton_trapecio=document.getElementById("btn_trapecio");
boton_trapecio.addEventListener("click",mostrar_trapecio);

