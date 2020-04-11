# Une année est bissextile avec modulo

Afin de jouer avec les opérateurs, et notamment l'opérateur modulo, voici un exercice assez classique : déterminer si une année est bissextile.

Pour rappel, une année est bissextile si elle est divisible par  4  sans être divisible par  100  ou si elle est divisible par  400  (cf.  [Wikipedia](https://fr.wikipedia.org/wiki/Ann%C3%A9e_bissextile)).

Pour second rappel, l'opérateur modulo (`%`) permet d'obtenir le reste d'une division. Si le reste vaut  `0`, c'est que la division est complète :  `if (8 % 2) { alert("8 est divisible par 2"): }`.


const year = [364,365];

function bisextil(years){


    if (year[0] % 4 === 0 && year[0] % 100 !== 0){
        console.log("année 0 bissextile");
    }else if (year[1] % 4 === 0 && year[1] % 100 !== 0){
        console.log("année 1 est bissextile");
    }else{
        console.log("pas bissextile");
    }
}

console.log(bisextil(year));
