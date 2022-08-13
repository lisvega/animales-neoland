

//1
const URL = ("http://localhost:8080/api/animal")
const URL1 = ("http://localhost:8080/api/pais")

//2

//lanzo la petición
window.onload = () => {
    //función que dispara
    init();
}

//3
//--------------------------------------------------------------------------------------
const init = async () => {
    // lanzar la función que obtiene los datos de la api  
    getAnimal();

    const animales = await getAnimal();
    console.log(animales);
    // lanzar la función que formatea los datos de la api
    mappedAnimal(animales);

    const paises = await getPais();
    console.log(paises);
    mappedPais(paises)



}

//-----------------------------------------------------------------------------
//4
const getAnimal = async () => {
    // lanzar la petición a la api para extraer los datos
    const animal2 = await fetch(URL);
    //cambiar formato
    const animal2Json = await animal2.json();
    return animal2Json;
}

const getPais = async () => {
    const paises1 = await fetch(URL1);
    const paises1Json = await paises1.json();
    return paises1Json;
}



//---------------------------------------------------------------------------------------



// aqui pintamos la información que hemos extraido de la api


const mappedAnimal = (animal) => {
    console.log(animal)
    //función de pintado
    animal.data.animales.map((animal) => {
        printAnimal({
            nombre: animal.nombre,
            tipo: animal.tipo,
            imagen: animal.imagen,
            descripción: animal.descripción,
        })
    })
};



const mappedPais = (pais) => {
    pais.data.paises.map((paises) => {
        return printPais({
            pais: paises.pais,
            habitantes: paises.habitantes,


        })

    })
};









//-------------------------------------------------------------------------------------

const printAnimal = (animales) => {
    console.log(animales);

    const animal3 = document.querySelector("#animal-neo")
    animal3.innerHTML += `

    <div class="container-principal">
    <div> <img src="${animales.imagen}"alt="${animales.nombre}"/> </div>

    <h2>${animales.nombre} </h2>
    <h2>${animales.tipo} </h2>
    <p>${animales.descripción} </p>
    </div>

    `
}



const printPais = (pais) => {
    console.log(pais);

    const pais3 = document.querySelector("#pais-neo")
    pais3.innerHTML += `

    <h2>${pais.pais}</h2>
    <p>${pais.habitantes}</p>
    <p>${pais.provincias}</p>
    `
}