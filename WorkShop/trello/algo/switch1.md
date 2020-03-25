# Écrire une boucle switch

Écrivez une boucle  `switch` . Je fais mes courses et j'aimerais scanner un produit pour connaitre son prix sur une borne.
Le prix d'un paquet de Pépito, d'une lessive Minidou, du paquet de chips, de mes bonbons haribo ...


const myList = ["pépito","minidou","chips","bonbon"]

for (let i = 0 ; i <= myList.length ; i ++){
    
    
    switch (myList[i]){
        

        case "pépito":

            console.log("1000€")

            break

        case "chips":

            console.log("3€")

            break
        
        case "minidou":

            console.log("100€")

            break
        
        case "bonbon":

            console.log("1€")

            break
        
        default:
            
            break

    }
}
