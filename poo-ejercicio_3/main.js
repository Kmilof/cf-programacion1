

import Comentario from "./Comentario.js";
const mostrarComentario=()=>{
    const comentario=new Comentario();
    comentario.obtenerComentario();
}
const boton_comentarios=document.getElementById("btn-1");
boton_comentarios.addEventListener("click",mostrarComentario);


import Foto from "./Foto.js";
const mostrarFoto=()=>{
    const foto=new Foto();
    foto.obtenerFoto();
}
const boton_fotos=document.getElementById("btn-2");
boton_fotos.addEventListener("click",mostrarFoto);

