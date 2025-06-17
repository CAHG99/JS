// Personaje de tv
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = "16";

let Personaje = {
    nombre:"Tanjiro",
    anime:"Demon slayer",
    edad:16,
};

console.log(Personaje);
console.log(Personaje.nombre);
console.log(Personaje["anime"]);

Personaje.edad = 13;

let llave = "edad";
Personaje[llave] = 16; // iterar todoas las propiedades de un objeto, si no conoces el nombre de la propiedad

delete Personaje.anime

console.log(Personaje);