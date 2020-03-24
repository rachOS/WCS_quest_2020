/* Crée un objet wilder ayant les propriétés suivantes :

name et city, ayant des valeurs de type String

age ayant une valeur de type Number

isLearningJs ayant une valeur de type Boolean */


const wilder = {
    name : "Grégory",
    city : "Bordeaux",
    age : "42",
    isLearningJs : true,    
  }
  
/* Ajouter du code pour parcourir l’objet, et indiquer si les propriétés suivantes
existent : name, isLearningJs, isLearningPhp */

console.log(wilder.hasOwnProperty("name"));
console.log(wilder["name"] !== undefined);
console.log(wilder["name"]);

console.log(wilder.hasOwnProperty("isLearningJs"));
console.log(wilder["isLearningPhp"] !== undefined)
console.log(wilder["isLearningPhp"]);

console.log(wilder.hasOwnProperty("isLearningPhp"));
console.log(wilder["isLearningPhp"] !== undefined)
console.log(wilder["isLearningPhp"]);

/*Ajouter les propriétés suivantes après coup :
knowsHTML et knowsCSS, ainsi qu’une propriété hobbies (tableau de string*/

wilder.knowsHTML = true;
wilder.knowCSS = true;

/* Ajouter une propriété hobbies qui prend en valeur un []*/

wilder.hobbies = ["coding","sleeping","experiment"]
console.log(wilder["hobbies"])


/*Supprimer la propriété name, et ajouter deux propriétés distinctes 
firstName et lastName */

wilder.name = ""
wilder.firstname = "Chamekh"
wilder.lastName = "Grégory"

/* 
  console.log(wilder.hasOwnProperty("name"));
  console.log(wilder.hasOwnProperty("isLearningJs"));
  console.log(wilder.hasOwnProperty("isLearningPhp"));
  
  
  console.log(wilder["name"] !== undefined);
  console.log(wilder["isLearningJs"] !== undefined);
  console.log(wilder["isLearningPhp"] !== undefined);
  
  console.log(wilder["name"]);
  console.log(wilder["isLearningJs"]);
  console.log(wilder["isLearningPhp"]);
  
  wilder.knowsHTML=true;
  
  wilder.knowsCSS=true;
  
  wilder.hobbies= ["eating","sleeping","coding", "washing my body"]
  
  delete wilder.name;
  
  wilder.firstName="Yhuel"
  wilder.lastName="François"
  
  for(let name in wilder){
    console.log("ikkk")
    console.log(name, wilder[name]);
  }; */

  