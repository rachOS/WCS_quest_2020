/* Réaliser des programmes permettant d’effectuer les opérations suivantes :

On alloue un tableau de 10 entiers. On affiche les valeurs contenus dans ce tableau.
A partir du précédent tableau créé, on va vouloir inverser les positions de chaque élément de ce tableau
(Ex: t1 = [1,2,3,4]   //  t2 = [4,3,2,1])
On crée 2 tableaux de même taille. A partir de ces deux tableaux, on va créer un 3ème tableau correspondant à la somme des éléments des tableaux
    (T3[0] = T1[0] + T2[0], T3[1] = T1[1] + T2[1], …) */
    

    const intTen = [0,1,2,3,4,5,6,7,8,9];
    console.log(intTen);
    
    
    const reverseIntTen = intTen.slice().reverse();
    console.log(reverseIntTen);
    
    
    /* const creatNewArray = (array1,array2) => {
      const add = [intTen + reverseIntTen];
      return add};
     */
     /* si le nbr d'index de [array1] === [array2]
     faire : 
     tant que i <= à la longueur de [array]
     const tablo3 = [array1.slice(i) + array2.slice(1)].push()

     sinon :
     afficher "nbr d'index inégaux dans les array"
       */
      console.log("nombre d'index dans intTen: ", intTen.length);
      console.log("nombre d'index dans reverseIntTen: ", reverseIntTen.length);

      
    const allWay = []

    for ( let i = 0 ; i < intTen.length ; i++){

      allWay[i] = intTen[i] + (reverseIntTen[i])
      
    }

    console.log(allWay,"test")