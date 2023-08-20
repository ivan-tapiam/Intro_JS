//Con esto selecciono la imagen para trabajar con ella//
const img=document.querySelector(".perro")

img.addEventListener(`click`, function(){
    if(this.style.border === `2px solid red`){ //esta imagen tiene los 2px??//
        this.style.border= `none`; //si lo tiene se lo quitamos//
    }else{
        this.style.border=`2px solid red`; //Si no lo tiene se agrega//
    }
})