/* Ton nouvel employeur, WildStore, te demande de convertir 
en euros des prix en centimes d'euros. 
Il te fournit ces prix sous la forme d'un tableau. 
C'est l'entrée de ton programme :const pricesInCents = [2999, 1899, 3789, 4199];

Comme exercice, cherche à traduire cet "algorithme" 
en code, que tu écriras dans ton éditeur ou sur JSBin 
(tu peux t'enregistrer avec GitHub pour sauvegarder tes travaux).

À nouveau, exerce-toi et écris une fonction centsToEuros qui prend
 en entrée un prix en centimes, et renvoie le prix converti en euros.

Puis remplace dans la boucle la conversion "directe" 
(unitPriceCents / 100) par un appel de cette fonction. */

const pricesInCents = [2999, 1899, 3789, 4199];

let pricesInEuros = []
let priceIndex = 0

for( price in pricesInCents){
  
  pricesInEuros[priceIndex] = pricesInCents[priceIndex]/100
  priceIndex++
  
}

console.log(pricesInEuros)

function centsToEuros(arrayPrice){

    let priceIndex = 0
    let priceConverted = []
    
    for( priceIndex in arrayPrice){
  
        priceConverted[priceIndex] = arrayPrice[priceIndex]/100
        priceIndex++
        
      }

    return priceConverted

}

console.log(centsToEuros(pricesInCents));

function cts2euros(array){

    //console.log(array / 100)
    return array / 100 + "€"
    
}

const priceNew = [5000,2789,65468,987]
const testMap = priceNew.map(cents => cents / 100 + "€€");

console.log(testMap,"test");

/* Filtrer un tableau avec for
Panique chez WildStore ! Une mauvaise manipulation a entraîné 
l'insertion d'articles avec des prix nuls ! 
Ton boss te demande maintenant une fonctionnalité de filtrage, 
pour ne garder que les prix valides.

Voici l'entrée de ton programme : le tableau de prix contenant des
 prix invalides.

const pricesInCents = [2999, 0, 1899, 0];
Javascript
Ton but est d'obtenir en sortie ce tableau, ne contenant
 que les prix différents de zéro : [2999, 1899] :

Voici comment tu pourrais t'y prendre avec une boucle for :

•
Créer un nouveau tableau vide pour y stocker les prix valides.

•
Parcourir le tableau avec la boucle. Pour chaque élément :

•
Vérifier si le prix est différent de zéro.

•
Si le prix est différent de zéro, l'ajouter au tableau de sortie.

•
Sinon, ne rien faire, et passer au prix suivant. */

const pricesWithZero = [2999, 0, 1899, 0]

console.log(pricesWithZero.splice(1,1))

for( let i = 0 ; i < pricesWithZero.length ; i++){

  if( pricesWithZero[i] === 0){
    
    pricesWithZero.splice(i,1)
    console.log(pricesWithZero, "splice")
  }
  
}

function priceWithoutZero(price){
  return price !== 0; 
}

const goodPrices = pricesWithZero.filter(priceWithoutZero)

//fonction flat-arrow

const nicePrice = pricesWithZero.filter(price => price !==0);

console.log(goodPrices, "avec la methode filter()")
console.log(nicePrice, "avec fonction flat-arrow")




