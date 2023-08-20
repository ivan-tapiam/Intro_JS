function example(a,b,c){
    return a+b+c
}
console.log(example)    
/*const example=function(a,b,c){ Una funcion expresiva se declara mediante una variable
    return a+b+c
}
console.log(example) De funcion declarativa a funcion expresiva*/

suma= function(a,b){
    return a+b
}
console.log(suma)
/*const suma= (a,b)=> a+b; Una funcion flecha omite el return y las llaves
console.log(suma)*/

function pintar(color=`red`, ele){
    ele.style.backgroundColor=color;
}

const ele=document.getElementById(`ele1`)
ele.addEventListener(`click`, ()=>{ //Funcion anonima//
    pintar(`blue`, ele)
})

//Otro ejercicio___________________________________________________//
let colorSeleccionado=``;

document.addEventListener(`keydown`, (event)=>{//keydown detecta la tecla que se presiona//
if(event.key==`a`){
    colorSeleccionado=`orange`;
    
}else if(event.key==`s`){
    colorSeleccionado=`purple`;
    
}else if(event.key==`d`){
    colorSeleccionado=`pink`;
    
}else if(event.key==`f`){
    colorSeleccionado=`black`;
}});

const div1=document.getElementById(`div1`);
div1.addEventListener(`click`, ()=>{
    pintar(colorSeleccionado, div1);
})