const casas=[ //Array de objetos//
    {
        id:1,
        nombre:"Casa 1",
        precio:100,
        descripcion:"Casa de 2 pisos",
        imagen:"./assets/IMG/casa1.jpg",
        cuartos:1,
        metros:100,
    },
    {
        id:2,
        nombre:"Casa 2",
        precio:200,
        descripcion:"Casa de 3 pisos",
        imagen:"./assets/IMG/casa1.jpg",
        cuartos:2,
        metros:200,
    },
    {
        id:3,
        nombre:"Casa 3",
        precio:300,
        descripcion:"Casa de 4 pisos",
        imagen:"./assets/IMG/casa1.jpg",
        cuartos:3,
        metros:300,
    },
    {
        id:4,
        nombre:"Casa 4",
        precio:400,
        descripcion:"Casa de 5 pisos",
        imagen:"./assets/IMG/casa1.jpg",
        cuartos:4,
        metros:400,
    }
]

document.addEventListener("DOMContentLoaded", function(){ //Aqui agregamos todo este contenido al HTML//
    const cardContainer= document.querySelector(".card-container");
    casas.map(casa=>{
        console.log(`casa`, casa);
        const card= document.createElement("div") //Aqui creamos un div//
        cardContainer.classList.add("row")
        card.classList.add("card")
        card.innerHTML=`
        <img src="${casa.imagen}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${casa.nombre}</h5>
            <p class="card-text">Descripcion: ${casa.descripcion}</p>
            <p class="card-text">Precio: ${casa.precio}</p>
            <p class="card-text">Cuartos: ${casa.cuartos}</p>
            <p class="card-text">Metros: ${casa.metros}</p>
        </div>
        `;
        cardContainer.appendChild(card)
    })
})

const limpiar =()=>{ //Aqui limpiamos el contenido de la pagina//
    const cardContainer= document.querySelector(".card-container");
    cardContainer.innerHTML=""
}

const buscar =()=>{
    const cuartos = parseInt(document.getElementById("cuartos").value);
    const mtInicial = parseInt(document.getElementById("mtsInicial").value);
    const mtFinal = parseInt(document.getElementById("mtsFinal").value);
    console.log(`cuartos`, cuartos, `mtsInicial`, mtInicial, `mtsFinal`, mtFinal);

    if(!mtsInicial && !mtsFinal){
        alert("Ingrese un rango de metros")
        limpiar()
        renderizar()
        return false    
    }
    const casasFiltradas = casas.filter(casa=>{
        return casa.metros >= mtInicial && casa.metros <= mtFinal 
    })

    limpiar()

    casasFiltradas.map(casa=>{
        const cardContainer= document.querySelector(".card-container");
        console.log(`casa`, casa);
        const card= document.createElement("div") //Aqui creamos un div//
        cardContainer.classList.add("row")
        card.classList.add("card")
        card.innerHTML=`
        <img src="${casa.imagen}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${casa.nombre}</h5>
            <p class="card-text">Descripcion: ${casa.descripcion}</p>
            <p class="card-text">Precio: ${casa.precio}</p>
            <p class="card-text">Cuartos: ${casa.cuartos}</p>
            <p class="card-text">Metros: ${casa.metros}</p>
        </div>
        `;
        cardContainer.appendChild(card)
    })

        console.log(`casasFiltradas`, casasFiltradas);
        return false
    
}


