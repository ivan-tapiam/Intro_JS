const precio= 400000;
document.querySelector(".card-text").innerHTML='Precio: '+ precio

function compra(){
    const botonCantidad = document.getElementById('cantidad')
    const valueBotonCantidad = botonCantidad.value;
    if (valueBotonCantidad > 0) {
        debugger
    }
    debugger
    let cantidad = document.getElementById("cantidad").value;
    let textColor = document.getElementById("text-color").value;
    document.getElementById('total').value = cantidad * precio;
}