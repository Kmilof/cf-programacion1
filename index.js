

const calcular = () => {
    const id_1=document.getElementById("inp_number1").value;
    const id_2=document.getElementById("inp_number2").value;
    const suma=parseInt(id_1)+parseInt(id_2);
    document.getElementById("h_resultado").textContent=suma;
}


const button=document.getElementById("button");
button.addEventListener("click",calcular);

