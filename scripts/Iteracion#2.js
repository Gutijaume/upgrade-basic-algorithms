
//EJERCICIO 2.1//
const character = {name: "Jack Sparrow", age: 10}
character.age = 25
console.log(character) // De esta forma modifico la propiedad edad

//Tambien es cierto que para esta en concreto solo haría falta poner a continuación el age: 25 porque modificaría el anterior
const character = {name: "Jack Sparrow", age: 10, age: 25}
console.log(character)

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


//EJERCICIO 2.3

const toy1 = { name: "Vuss myYear", price: 19}
const toy2 = { name: "Rallo mcKing", price: 29}
console.log(toy1.price + toy2.price) // Sería la forma más sencilla, almenos en este caso que solo tenemos dos juguetes.



//EJERCICIO 2.4

let globalBasePrice = 10000
const car1 = {name: "BMW m&m", basePrice: 50000, finalPrice: 60000}
const car2 = {name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000}

let newGlobalPrice = 25000
const newCar1 = {...car1}
newCar1.finalPrice = car1.basePrice + newGlobalPrice
console.log(newCar1)

const newCar2 = {...car2}
newCar2.finalPrice = car2.basePrice + newGlobalPrice
console.log(newCar2)
