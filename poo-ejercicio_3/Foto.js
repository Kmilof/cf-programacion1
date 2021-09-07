

export default class Foto{
    constructor(){}
    async obtenerFoto(){
        const datos=await fetch("https://jsonplaceholder.typicode.com/photos");
        const foto=await datos.json();
        let array_fotos=[];
        foto.forEach(element => {
            let item=`
            <div class="col-4 mb-3">
                <div class="card">
                    <img src="${element.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.id}</h5>
                    </div>
                </div>
            </div>`;
            array_fotos.push(item);
        });
        document.getElementById("card-fotos").innerHTML=array_fotos.join('');
    }
}

