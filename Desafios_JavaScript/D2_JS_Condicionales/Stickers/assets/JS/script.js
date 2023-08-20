function onSticker(frmSticker){//se crea una nueva variable, entre () va la clase del formulario//
    let stk1=frmSticker.sticker1.value; //clase del formulario .ID del input. valor//
    let stk2= parseInt(frmSticker.sticker2.value);
    let stk3=frmSticker.sticker3.value;
    
    if(stk1===`` || stk2===`` || stk3===``){ //si el formulario esta vacio, return alert//
        alert(`Completa el formulario`)
        return false; //se retorna False para terminar el bucle//
    }
    stk1=parseInt(stk1); //con parseInt se tranforma un string a numero//
    stk3=parseInt(stk3);
    let total= stk1+stk2+stk3;
    if(total > 10){
        alert("Llevas mas de 10 sticker")
    }

    console.log(total)
    return false
}
