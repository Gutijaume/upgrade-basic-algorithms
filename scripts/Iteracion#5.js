//CONDICIONALES//

//5.1//

const number1 = 10;
const number2 = 20;
const number3 = 2;
let div = number2 / number1;
let multi3 = number3 * 5;
let multi1 = number1 * 2;
let div2 = number2 / 2;
let div1 = number1 / 5;

if (number1 === 10) {
  console.log("number1 es estrictamente igual a 10");
};
if (div == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
};
if (number1 !== number2) {
  console.log("number1 es esgtrictamente distinto de number2");
};
if (number3 != number1) {
  console.log("number3 es distinto de number1");
};
if (multi3 == number1) {
  console.log("number3 por 5 es igual a number1");
};
if (multi3 == number1 && multi1 == number2){
    console.log("number3 por 5 es igual a number1 Y number1 por dos es igual a number2"); 
};
if (div2 == number1 || div1 == number3){
    console.log('number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3');
};

// Hay alguna forma de ralizar la operación dentro del propio condicional, en vez de crear la variable global???

