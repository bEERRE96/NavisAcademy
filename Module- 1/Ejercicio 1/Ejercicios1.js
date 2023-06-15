console.log("Hola mundo!");


var nombre = "Brian";
var edad = 26;
var mayorDeEdad = true;
var direccion = "Avenida siempre viva";
var coloresFavoritos = ["Rojo", "Negro"];
var lenguajesFavoritos = ["JavaScript", "HTML", "CSS"];
var mejorLenguaje = lenguajesFavoritos[0];
var peorLenguaje = lenguajesFavoritos[2];



var numero1 = 15;
var numero2 = 18;

console.log(numero1 + numero2);

var numero3 = 15;
var numero4 = 7;

console.log(numero3 - numero4);

var numero5 = 15;
var numero6 = 7;

console.log(numero5 * numero6);

var numero7 = 16;
var numero8 = 2;

console.log(numero7 / numero8);

var saludo = "Hola";

if(saludo === "Hola"){
    console.log("Ha saludado");
}

let pokemones = ["Blastoise", "Pikachu", "Raychu"];

console.log(pokemones);


for(let i = 0; i < pokemones.length; i++){
    console.log(pokemones[i]);
}


let pokemons = [
    {Nombre:"Venasuour", tipoDePokemon:"Tierra"},
    {Nombre:"Pikachu", tipoDePokemon:"Electrico"},
    {Nombre:"Charmander", tipoDePokemon:"Fuego"}
];


for(let i = 0; i < pokemons.length; i++){

if(pokemons[i].tipoDePokemon === "Fuego"){
    console.log(pokemons[i].Nombre + " Es un pokemon de fuego");
}
}