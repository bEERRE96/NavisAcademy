/* const users = [
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 27,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
  ];


 function filtro(pers){
let mayores = [];

for(let i = 0; i < pers.length; i++){
    if(pers[i].age > 25){
        mayores.push(pers[i].name);
    }
}
return mayores;
  }


 console.log(filtro(users)); 
 */

// Crea una función que reciba un array de strings y devuelva un array con las strings que empiecen por "a" o "A".

/* function Filtro(arr){
    if(arr[0] === 'a' || arr[0] === "A"){
        return arr
    }
    else{
        return "No comienza por A"
    }
}

console.log(Filtro("Avestruces veloces"))
console.log(Filtro("Querido santa"))

*/

/*
Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos exactamente 3 veces. Si el usuario adivina el número correctamente, imprime "¡Eso fue correcto!" De lo contrario, imprimirá "Lo siento, eso estaba mal." El programa se detiene después del 4º intento o si lo adivinaron correctamente.
*/

/* function adivinarPin(pin) {
   let intentos = 0;

   while (intentos < 3) {
     let entrada = prompt("Introduzca aqui el pin:");
     if (entrada != pin) {
       intentos++;
       alert("Lo siento, eso estaba mal");
     } else {
       alert("¡Eso fue correcto!");
       break;
     }
   }
   if (intentos == 3) {
     alert("Se agotar los intentos");
   }
 }


function adivinarSinLimites(pin) {
  let exit = "salir";
  let intentos = false;
  while (intentos != true) {
    let entrada = prompt("Introduzca aqui el pin:");
    if (entrada == exit) {
      intentos = true;
      alert("Lo siento, eso estaba mal");
    } else if (entrada == pin) {
      intentos = true;
      alert("¡Eso fue correcto!");
    } else {
      alert("Intento fallido, vuelva a intentar");
    }
  }
}
*/

/* 
Crea una función que permita comprobar si un string es un palíndromo.
Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
*/
/* function palindromos(str) {
  let frase = "";
  for (let i = str.length - 1; i >= 0; i--) {
    frase += str[i].toLowerCase();
  }
  if(frase === str.toLowerCase()){
    return "Es un palindromo"
  }
  else{
    return "No es un palindromo"
  }
}

console.log(palindromos("neuquen"));
console.log(palindromos("cacahuate"));
console.log(palindromos("aBa"));
console.log(palindromos("SaLaBaLas"));
*/

/* 
 Crea una función que reciba un array de nombres que le han dado like a una foto, e indica por consola quien ha dado like. En los siguientes formatos:
*/

/* function likes(arr){
  if(arr.length === 0){
    return "Nadie ha dado like"
  }
  else if(arr.length === 1){
return `${arr[0]} ha dado like`
  }
  else if(arr.length === 2){
    return `${arr[0]} y ${arr[1]} han dado like`
  }
  else if(arr.length === 3){
    return `${arr[0]}, ${arr[1]} y ${arr[2]} han dado like`
  }
  else{
    return `${arr[0]}, ${arr[1]} y ${arr.length - 2} personas más han dado like`
  }
}

console.log(likes([]))
console.log(likes(["Juan"]))
console.log(likes(["Juan", "Maria"]))
console.log(likes(["Juan","Maria", "Pedro"]))
console.log(likes(["Juan","Ramon","Carlos","Martin","Ruben"]))
console.log(likes(["Juan","Ramon","Carlos","Martin","Ruben","Martin","Ruben","Martin","Ruben","Martin","Ruben"]))

*/

const users = [
  {
    name: "Juan",
    age: 25,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
  {
    name: "María",
    age: 30,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pedro",
    age: 20,
    city: "Madrid",
    hobbies: ["fútbol", "programar"],
  },
  {
    name: "Laura",
    age: 35,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pablo",
    age: 27,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
];

/* 
Crea una función que devuelva un array con los nombres de las personas que viven en Madrid.
 Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.
 Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.
 Encuentra la primera persona que le guste programar.
 Haz la suma de todas las edades de las personas.
 Crea un nuevo array solo con la ciudad de cada persona y su primer hobby. La estructura del array debe ser:
*/

/* function madridista(arr){
  let Madrid = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].city == 'Madrid'){
      Madrid.push(arr[i].name)
    }
  }
  return Madrid;
}

console.log(madridista(users)) */

/* function edad(arr){
  let mayorDe25 = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].age > 25){
      mayorDe25.push(arr[i].name)
    }
  }
  return mayorDe25;
}

console.log(edad(users));*/

/* function mayoresDeMadrid(arr){
  let mayorDe25 = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].age > 25 && arr[i].city == 'Madrid'){
      mayorDe25.push(arr[i].name)
    }
  }
  return mayorDe25;
}

console.log(mayoresDeMadrid(users));*/

/* function sumaDeEdad(arr){
  let edades = [];
  for(let i = 0; i < arr.length; i++){
    edades.push(arr[i].age)
  }
  let sumaEdad = edades.reduce((a,b) => {return a + b}, 0)
  return sumaEdad;
}

console.log(sumaDeEdad(users)) */

/* const buscarHobbie = ({hobbies}) => hobbies.includes("programar");
const primerProgra = users.find(buscarHobbie);
console.log(primerProgra); */

/* function ciudadHobbie(arr){
  let nuevoArr = [];
  for(let i = 0; i < arr.length; i++){
    nuevoArr.push({"city":arr[i].city , "hobby":arr[i].hobbies[0]})
  }
  return nuevoArr
}

console.log(ciudadHobbie(users)); */

/* 
Crea una función que reciba un array de strings y devuelva un array con las strings ordenadas alfabéticamente de menor a mayor.
 Dado el siguiente array de numeros, crea una función que devuelva un array sin los números duplicados.


*/
/* let frases = ["Hola", "como", "Aliba", "alib", "Kes", "erSe", "Rat"];

function ordenar(str) {
  let orden = [];
  for (let i = 0; i < str.length; i++) {
    orden.push(str[i].toLowerCase());
  }
  return orden.sort();
}

console.log(ordenar(frases)); */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function filtrar(arr){
  let orden = arr.sort((a,b) => a - b);
  for(let i = 0; i < orden.length; i++){
      if(arr[i] == arr[i + 1]){
          delete orden[i]
      }
  }
  return orden.flat()
}

console.log(filtrar(numbers))
*/

/* 
Dado el siguiente array de objetos, crea una función que devuelva un array sin los objetos duplicados.

*/
/* 
const users1 = [
  {
    name: "Juan",
    age: 25,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
  {
    name: "María",
    age: 30,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pedro",
    age: 20,
    city: "Madrid",
    hobbies: ["fútbol", "programar"],
  },
  {
    name: "Laura",
    age: 35,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pablo",
    age: 27,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
  {
    name: "Juan",
    age: 25,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
  {
    name: "María",
    age: 30,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pedro",
    age: 20,
    city: "Madrid",
    hobbies: ["fútbol", "programar"],
  },
  {
    name: "Laura",
    age: 35,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pablo",
    age: 35,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
];

function removeDuplicates(array) {
  const uniqueArray = [];

  array.forEach((item) => {
    // Comprobamos si el objeto actual ya existe en el nuevo array
    if (
      !uniqueArray.some((uniqueItem) => {
        // Comparamos las propiedades del objeto para verificar si son iguales
        return (
          uniqueItem.name === item.name &&
          uniqueItem.age === item.age &&
          uniqueItem.city === item.city &&
          arraysEqual(uniqueItem.hobbies, item.hobbies) // Comparamos los hobbies utilizando una función auxiliar
        );
      })
    ) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const uniqueUsers = removeDuplicates(users);

console.log(uniqueUsers); */
