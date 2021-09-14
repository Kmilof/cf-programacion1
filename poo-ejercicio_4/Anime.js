

export default class Anime{
    constructor(){}
    async obtenerCatalogo(){
        const datos=await fetch("https://api.jikan.moe/v3/search/anime?q=dragon%20ball%20z");
        const fotos=await datos.json();
        const catalogo=fotos.results;
        let array_fotos=[];
        catalogo.forEach(element => {
            let item=`
            <div class="col-4 mb-3">
                <div class="card">
                    <img src="${element.image_url}" style="height:500px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" style="height:50px">${element.title}</h5>
                    </div>
                </div>
            </div>`;
            array_fotos.push(item);
        });
        document.getElementById("card-fotos").innerHTML=array_fotos.join('');
    }
}


