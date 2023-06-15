function sum(num) {
  return num * 2;
}

function potencia(num) {
  return Math.pow(num, 2);
}

function rectangulo(a, b) {
  console.log(a * b);
}

function calculo(num) {
  if (num % 2 == 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

const personas = [
  { nombre: "Juan", edad: 18 },

  { nombre: "María", edad: 16 },

  { nombre: "Pedro", edad: 21 },

  { nombre: "Pablo", edad: 15 },

  { nombre: "Laura", edad: 19 },
];

function mayoriaDeEdad(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].edad > 18) {
      console.log(array[i].nombre + " es mayor de edad.");
    } else {
      console.log(array[i].nombre + " es menor de edad.");
    }
  }
}

mayoriaDeEdad(personas);

function edades(arr) {
  let edades = [];
  let edadMaxima;
  let edadMinima;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].edad > 0) {
      edades.push(arr[i].edad);
    }
  }
  edadMaxima = Math.max.apply(null, edades);
  console.log("La edad maxima es: " + edadMaxima);
  edadMinima = Math.min.apply(null, edades);
  console.log("La edad minima es: " + edadMinima);
}

edades(personas);



function pokemons() {
  let pokes = [
    { Nombre: "Venasuour" },
    { Nombre: "Pikachu" },
    { Nombre: "Charmander" },
  ];
  let nombreDePokes = [];

  for (let i = 0; i < pokes.length; i++) {
    nombreDePokes.push(pokes[i].Nombre);
  }
  console.log(nombreDePokes);
}

pokemons();


function pokemones() {
   let pokes = [
        {Nombre:"Venasuour", tipoDePokemon:"Tierra"},
        {Nombre:"Pikachu", tipoDePokemon:"Electrico"},
        {Nombre:"Charmander", tipoDePokemon:"Fuego"}
    ];
    

for(let i = 0; i < pokes.length; i++){

    if(pokes[i].tipoDePokemon === "Fuego"){
        console.log(pokes[i].Nombre + " Es un pokemon de fuego");
    }
    }
}

pokemones();


let edadFlecha = (arr) => {
    let edades = [];
    let edadMaxima;
    let edadMinima;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].edad > 0) {
        edades.push(arr[i].edad);
      }
    }
    edadMaxima = Math.max.apply(null, edades);
    console.log("La edad maxima es: " + edadMaxima);
    edadMinima = Math.min.apply(null, edades);
    console.log("La edad minima es: " + edadMinima);
  }
  
  edadFlecha(personas);
  