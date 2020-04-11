// Simplement afficher la chaîne “Hello World!”
// Renvoyer à l’identique le paramètre passé en entrée

console.log("Hello World!");



const hello = word => word;



// Renvoyer le double de la valeur entière passée en entrée



const doubleValue = number => number * 2;



// Renvoyer  la multiplication de deux valeurs entières passées en entrée


const multiply = (a,b) => a * b;



// Renvoyer, à partir d’une chaîne de caractères passée en entrée, 
// la même chaîne entourée du caractère *  (‘John’ => ‘*John*’)


const addStars = string => console.log("*"+string+"*");


// CALL FUNTION //

const myWord = "world"
hello(myWord);

const myNumber = 5
doubleValue(myNumber);

console.log(multiply(5,2));

addStars("Wild Code School");


