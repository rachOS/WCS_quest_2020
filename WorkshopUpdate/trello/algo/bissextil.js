
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

