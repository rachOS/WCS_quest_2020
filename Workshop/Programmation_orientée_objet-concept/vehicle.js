/* Ecrire une classe Vehicle 
avec des attributs représentants la couleur et le nom du modèle
 une méthode affichant le modèle et la couleur


Ecrire les classes Car et Moto qui héritent de Vehicle, ces classes doivent surcharger la méthode d’affichage pour spécifier si il s’agit d’une voiture ou d’une moto
 */

class Vehicle{
    constructor(color, model){
        this.color = color;
        this.model = model;
    }

    displayAttribut(){

        console.log(`Your vehicule has ${this.color} as color and ${this.model} as model`);
        //return `Your vehicule has ${color} as color and ${model} as model`;
    }
}

const myVehicule = new Vehicle("grey","Tesla");

myVehicule.displayAttribut()

class Car extends Vehicle{

    constructor(color, model, type){

        super (color,model);
        this.type = type
    }

    displayPropertie(){
        console.log(`Your vehicle is a ${this.type} with ${this.color} as color and ${this.model} as model`);
    }
}

const myCar = new Car("black","lexus","car")

myCar.displayPropertie()