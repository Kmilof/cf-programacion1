
const db=firebase.firestore();


function guardarCliente(){
    const unCliente={
        nombre: document.getElementById("inp-1").value,
        apellido: document.getElementById("inp-2").value,
        dni: document.getElementById("inp-3").value
    }
    db.collection("cliente").doc().set(unCliente);
    vaciar();
}


function vaciar(){
    document.getElementById("inp-1").value="";
    document.getElementById("inp-2").value="";
    document.getElementById("inp-3").value="";
}

