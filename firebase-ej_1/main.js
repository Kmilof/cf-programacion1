
const db=firebase.firestore();


function guardarCliente(){
    const unCliente={
        nombre: document.getElementById("inp-1").value,
        apellido: document.getElementById("inp-2").value,
        dni: document.getElementById("inp-3").value
    }
    db.collection("cliente").doc().set(unCliente);
    vaciar();
    listarCliente();
}


function vaciar(){
    document.getElementById("inp-1").value="";
    document.getElementById("inp-2").value="";
    document.getElementById("inp-3").value="";
}


async function listarCliente(){
    const clientes=await db.collection("cliente").get();
    let lista_clientes=[];
    const lista_conformada=clientes.docs.map(doc=>{
        lista_clientes=doc.data();
        lista_clientes.id=doc.id;
        return lista_clientes;
    });
    let lista_tr=[];

    lista_conformada.forEach(element=>{
        let tr=`
        <tr>
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.dni}</td>
            <td>
                <button onclick="eliminarCliente('${element.id}')" class="btn btn-danger btn-sm">x</button>
                <button onclick="editarCliente('${element.nombre}','${element.apellido}',${element.dni},'${element.id}')" class="btn btn-primary btn-sm">Edit</button>
            </td>
        </tr>`
        lista_tr.push(tr);
    })
    document.getElementById("tbody").innerHTML=lista_tr.join('');
}


function eliminarCliente(id){
    db.collection("cliente").doc(id).delete();
    listarCliente();
}


function editarCliente(nombre,apellido,dni,id){
    document.getElementById("inp-1").value=nombre;
    document.getElementById("inp-2").value=apellido;
    document.getElementById("inp-3").value=dni;
    document.getElementById("inp-4").value=id;
}


function actualizarCliente(){
    const clienteAcutalizado={
        nombre:document.getElementById("inp-1").value,
        apellido:document.getElementById("inp-2").value,
        dni:document.getElementById("inp-3").value
    }
    let id=document.getElementById("inp-4").value;
    db.collection("cliente").doc(id).update(clienteAcutalizado);
    listarCliente();
}


listarCliente();
