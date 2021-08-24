

const resolver=()=>{
    let a=parseInt(document.getElementById("inp_a").value);
    let b=parseInt(document.getElementById("inp_b").value);
    let c=parseInt(document.getElementById("inp_c").value);
    let resultado_1=(-b+(Math.sqrt((Math.pow(b,2))-(4*a*c))))/2*a;
    let resultado_2=(-b-(Math.sqrt((Math.pow(b,2))-(4*a*c))))/2*a;
    alert("las raices son: "+resultado_1+" y "+resultado_2);
}
let boton=document.getElementById("btn_mostrar");
boton.addEventListener("click",resolver);
