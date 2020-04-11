let ageArray = [24,28,32,17,36]

const john = ageArray[0];
const barbara = ageArray[1];
const patrick = ageArray[2];
const benjamin = ageArray[3];
const sylvie = ageArray[4];

//total age
const totalAge = () => ageArray[0] + ageArray[1] + ageArray[2] + ageArray[3] + ageArray[4]

let sumOfAge = ageArray.reduce(totalAge)
console.log(sumOfAge);

//moyenne d'age
const averageAge = () => (sumOfAge) / ageArray.length
console.log(averageAge(ageArray))

// diff entre le plus jeune et le moins jeune


/* switch (ageArray){
  case (ageArray[0] > ageArray[1]):
    let youngest = ageArray[1];
  break

  case (ageArray[0] > ageArray[2]):
     youngest = ageArray[2];
  break

  case (ageArray[0] > ageArray[3]):
     youngest = ageArray[3];
  break

  case (ageArray[0] > ageArray[4]):
     youngest = ageArray[4];
  break

  default:

  youngest = ageArray[0]
    console.log(youngest)

} */

const oldest = Math.max(john, barbara, patrick, benjamin, sylvie);
const youngest = Math.min(john, barbara, patrick, benjamin, sylvie);

const difference = oldest - youngest;

let max = Math.max(...ageArray);
let min = Math.min(...ageArray);
console.log('Difference between older and youngest', max - min);

let differenceAge2 = (difference > 10) ? true : false
console.log(differenceAge2)

let differenceAge3 = (john && benjamin < 25) ? true : false
console.log(differenceAge3)

let elder = (sylvie < 35) ? "There's no over 35." : "At least one person is over 35."
console.log(elder)