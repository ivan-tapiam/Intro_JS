const precio=100;
let message= `El precio es: ${precio}`; //Para concatenar se deben usar los backsticks//
document.querySelector("#precio").innerHTML=message;

//Funcion flecha que permite tomar los valores desde HTML con el valor value//
const onCompra=(formulario)=>{
    let cantidad=formulario.cantidad.value
    let color=formulario.color.value
    let total = cantidad * precio
    document.querySelector(".valorTotal").innerHTML= `El total de la compra es de ${total}`
    
    if(cantidad == `` || color == ``){
        alert("debe ingresar una cantidad")
    }

    if(color == "rojo"){
        mensaje="Elegiste rojo"
        document.querySelector(".colorElegido").innerHTML=mensaje
        document.querySelector(".colorElegido").style.color= "red"
    }
    
    return false
}
