/* Array.prototype.map - Exercise 1

* Write the CONTENTS of the `getStringsLength` function
* It receives an array of strings as an argument
* Inside the function, use map on the array of strings, to process each string this way:
  if you get the string STR of length LEN as an input (to map's function parameter),
  you must return "STR contains N characters" as an output
* As usual: FIRST OF ALL, focus on writing the function that processes ONE string...
  Then you only need to use this function with map.

Sample INPUT array (strings) for getStringsLength:
  [
    'Chicken',
    'Bacon',
    'Tofu',
    'Mayonnaise'
  ]

Expected OUTPUT for this sample array:
  [
    'Chicken contains 7 characters',
    'Bacon contains 5 characters',
    'Tofu contains 4 characters',
    'Mayonnaise contains 10 characters'
  ]

*/
const ingredient = ['Chicken','Bacon','Tofu','Mayonnaise']

//console.log(`${pizza4Cheese[0]} contain ${pizza4Cheese[0].length} characters "TEEEST"`)

function getStringsLength(food) {
  
  //console.log(`${food} contain ${food.length} characters`)
  return food.map( food => `${food} contains ${food.length} characters`)

}

console.log(getStringsLength(ingredient))
getStringsLength(ingredient); // /!\ map() parcours le contenu des index!!! Lorsque la fonction doit être passée dans map()
                                                 // nous n'avons pas besoin déclarer les index dans la fonction 
                                                 // ex : return `${pizza4Cheese} contain ${pizza4Cheese.length} characters` === console.log(`${pizza4Cheese[0]} contain ${pizza4Cheese[0].length} characters`)
                                                 // en d'autre terme map() remplace la boucle ' for( let i = 0 ; i < array.lenght ; i++)'


/* for( let i = 0 ; i < pizza4Cheese.length; i++){
  console.log(pizza4Cheese[i],"<=", pizza4Cheese[i].length , "<="," [i] == map()");
}
console.log("map() parcours les index d'un ARRAY et attend une fonction en paramètre") */
//===============================================================================================

// If you need, you can always visualize the result with a console.log.
// In that case, uncomment the line below (you can also add your own
// console.log INSIDE the function).
// Instead of running `npm test`, you can then use `node map/ex1`
// (you still need to run `npm test` to make sure you did right).

// console.log(getStringsLength(['Cat', 'Lion', 'Tiger', 'Jaguar', 'Leopard']));

// DON'T TOUCH THIS!
module.exports = getStringsLength;

/* function ajouteDuTexteDansMonIndex(array){
  return array.concat(" maitrise map()")
}

const namE = ["Chloe", "Grégory", "David", "Emeline", "Johanna", "etc"]

console.log(namE.map(ajouteDuTexteDansMonIndex)) */
