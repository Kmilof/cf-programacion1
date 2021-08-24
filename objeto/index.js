

const mostrar=()=>{
    const miObjeto={
        nombre:"Pepe",
        apellido:"Argento",
        dni:15326244
    }
}
const boton=document.getElementById("btn_mostrar");
boton.addEventListener("click",mostrar);
console.log(`
Nombre: ${miObjeto.nombre}
Apellido: ${miObjeto.apellido}
Dni: ${miObjeto.dni}
`)

