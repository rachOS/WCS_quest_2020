/* Tu vas devoir écrire une classe Person, permettant de modéliser 
une personne. 
Chaque instance de la classe Person aura deux attributs, 
name et age.

•
Le constructeur de Person devra initialiser les attributs 
name et age à partir des paramètres qui lui sont passés.

•
La classe Person disposera également de deux méthodes, 
tellMyName et tellMyAge, qui afficheront respectivement :
 I am <name> et I am <age> years old  
 (remplacer <name> et <age> respectivement par 
les valeurs des attributs name et age).

Enfin, pour tester ta classe, tu devras instancier 
deux personnes ayant pour noms et âges respectifs 
"John" et 40, "Mary" et 35, 
et appeler les méthodes tellMyName et tellMyAge sur chacune 
de ces instances de Person. */

class Person {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    
    tellMyName(){
        console.log(`I am ${this.name}`);
        return `I am ${this.name}`;
    }

    tellMyAge(){
        console.log(`I am ${this.age} years old`);
        return `I am ${this.age} years old`;
    }

}

const name1 = new Person('John', 42);
const name2 = new Person('Mary',35);

console.log(name1.tellMyName(), name1.tellMyAge())
console.log(name2.tellMyName(), name2.tellMyAge())

/////////////////////////////////////////////////////