// faire un multiplication entre 2 nombre en utilisant uniquement l'opération d'addition (while)
let a = 4;
let b = 2;
let c = 0


while (c < a * b){
  c++
}
console.log(c)

// compte de 5 en 5 jusqu'à 100 puis affiche les nombre trouvé (for)

for (let j = 0; j <= 100; j += 5){
    console.log(j, j+j)
}

// Ecrire un programme qui lit trois paramètres : un nombre entier, un caractère représentant une opération (+,-,x ou /)
// et un second nombre entier, puis qui effectue le calcul ainsi indiqué et affiche le résultat. 
// (Attention à éviter les divisions par 0)  (switch)

let number1 = 8;
const operator = '+'
let number2 = 5;
let result = 0;

switch(operator){

    case "+":
        result = number1 + number2
        console.log(result)
        break

    case "-":
        result = number1 - number2
        console.log(result)
        break

    case "*":
        result = number1 * number2
        console.log(result)
        break

    case "/":
        result = number1 + number2
        console.log(result)
        break

    default:
        break
}

