

import Pitagoras from "./Pitagoras.js";
const ejecutar=()=>{
    const instancia=new Pitagoras();
    instancia.calcular();
}
const boton=document.getElementById("btn_mostrar");
boton.addEventListener("click",ejecutar);

