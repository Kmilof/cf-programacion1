

const pitagoras=()=>{
    let opuesto=(document.getElementById("cat_opuesto").value);
    let adyacente=(document.getElementById("cat_adyacente").value);
    let hipo=Math.sqrt(Math.pow(opuesto,2)+Math.pow(adyacente,2));
    alert("el resultado es: "+hipo);
}
let boton=document.getElementById("btn_mostrar");
boton.addEventListener("click",pitagoras);

