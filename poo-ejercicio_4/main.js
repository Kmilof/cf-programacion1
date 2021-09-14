

import Anime from "./Anime.js";
const mostrar=()=>{
    const comentario=new Anime();
    comentario.obtenerCatalogo();
}
const boton=document.getElementById("btn");
boton.addEventListener("click",mostrar);


