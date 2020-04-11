//Réécrire la fonction suivante en utilisant une fonction fléchée et une template string.

function hello(firstName) {

    return "Hello " + firstName + " welcome into the Wild.";
    
}

// funct arrow

const hellO = (firstName) => "Hello " + firstName + " welcome into the Wild.";

console.log(hello("Grégory"),hellO("Grégory"));



//Utiliser le spread operator pour concaténer le contenu des 2 tableaux.
const fruits = ["Bananas", "Oranges", "Strawberries"];
const vegetables = ["Cabbages", "Carotts"];
// expected array: ["Bananas", "Oranges", "Strawberries", "Cabbages", "Carotts"]

const basket = [fruits]+ "," + [...vegetables];

console.log(basket);
