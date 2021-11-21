
//EJERCICIO 2.1//
const character = {name: "Jack Sparrow", age: 10}
// una variable constante no se puede modificar//
let character = {name: "Jack Sparrow", age: 10, age:25};
console.log(character) //No puedo modificar la variable des de fuera ya que se trata de una variable local dentro de la variable character, o bien la modificamos dentro o a continuación le asignamos un nuevo valor
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//EJERCICIO 2.2//
let firstName = "Jon";
let lastName = "Snow";
let age = 24;
console.log(
  "Soy " +
    firstName +
    " " +
    lastName +
    ", tengo " +
    age +
    " años y me gustan los lobos."
);

//****Otra opción de hacerlo sería*//
let firstName = "Jon";
let lastName = "Snow";
let age = 24;
let completeName = firstName + " " + lastName;
let presentation = "Soy " + completeName + ", tengo " + age + " años y me gustan los lobos.";
console.log (presentation);
