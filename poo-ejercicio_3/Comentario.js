

export default class Comentario{
    constructor(){}
    async obtenerComentario(){
        const datos=await fetch("https://jsonplaceholder.typicode.com/comments");
        const comentario=await datos.json();
        let array_comentarios=[];
        comentario.forEach(element => {
            let item=`<li class="list-group-item">${element.name}</li>`;
            array_comentarios.push(item);
        });
        document.getElementById("list-comentarios").innerHTML=array_comentarios.join('');
    }
}

