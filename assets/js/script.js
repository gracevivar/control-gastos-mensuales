let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcion = [];
let indexUpdate = -1;
function agregar(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    if(Number(valorGasto) > 150){
        alert('El valor del gasto es mayor a $150');
    }
    if(indexUpdate == -1){        
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcion.push(descripcionGasto);
        actualizarListaGastos();
    }else{
        listaNombresGastos[indexUpdate]= nombreGasto;
        listaValoresGastos[indexUpdate] = valorGasto;
        listaDescripcion[indexUpdate] = descripcionGasto;
        actualizarListaGastos();
    }
}
function actualizarListaGastos(){
    const elementListaGatos = document.getElementById('listaDeGastos');
    const elementTotal = document.getElementById('totalGastos');
    let htmlLista= '';
    let totalGasto = 0;
    listaNombresGastos.forEach((element, index) =>{
        const valorGasto = Number(listaValoresGastos[index]);
        const descripcionGasto = listaDescripcion[index];
        htmlLista += `<li>
            <p>${element} - USD ${valorGasto.toFixed(2)} 
            <br><span class="descripcion"> Descripción: ${descripcionGasto} </span>
            </p>
            <button  onclick="editar(${index});">Actualizar</button>
            <button  onclick="eliminar(${index});">Eliminar</button>
        </li>`;
        totalGasto += Number(valorGasto);
    })
    elementListaGatos.innerHTML= htmlLista;
    elementTotal.innerHTML = totalGasto.toFixed(2);
    limpiar();
}
function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
    indexUpdate = -1;
    document.getElementById("botonFormulario").innerText = "Agregar Gasto";
}
function eliminar(index){
    listaNombresGastos.splice(index,1);
    listaValoresGastos.splice(index, 1);
    actualizarListaGastos();
}
function editar(index){
    indexUpdate = index;
    document.getElementById('nombreGasto').value = listaNombresGastos[index];
    document.getElementById('valorGasto').value = listaValoresGastos[index];
    document.getElementById('descripcionGasto').value = listaDescripcion[index];
    document.getElementById("botonFormulario").innerText = "Actualizar";
}