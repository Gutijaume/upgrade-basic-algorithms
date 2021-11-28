//1.1//

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]
let avenger = avengers[0]
console.log(avenger) //En este caso es mmuy sencillo, porque está el primero pero si no lo estuviera deberíamos buscarlo antes de la siguiente forma:

whereIsHulk = avengers.indexOf('HULK')
console.log(whereIsHulk)// Así conseguimos la posición de Hulk que es la 0 y después podríamos seguir con lo detallado anteriormente para imprimir HULK en console.

//1.2//
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]
avengers.splice(0,1,'IRONAMAN');

//1.3//
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]
alert(avengers.length)

//1.4//
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]
rickAndMortyCharacters.push ("Morty", "Summer")
let lastItem = rickAndMortyCharacters[4]
console.log(lastItem)

//1.5//
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer"]
rickAndMortyCharacters.pop()
let choosedCharacters = rickAndMortyCharacters[0] + ", " + rickAndMortyCharacters [3]
console.log(choosedCharacters)

//1.6//
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]
let splicingElements = rickAndMortyCharacters.splice(1,1)
console.log(rickAndMortyCharacters)


