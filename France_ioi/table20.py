table = 1
countr = 1

for loop in range(20):

	result = 0

	for loop in range(20):
		
		result = table * countr # on calcule le résulat avec la valeur de table et countr en début de boucle
		print(result, end=" ") # on affiche le résultat 20 fois de suite sans saut de ligne
		countr += 1 # on incrémente le compteur de 1

	print() # on va à la ligne

# toutes les 20 boucles 

	countr = 1 # on reinitialise le compteur à 1
	table += 1 # on incrémente la table de multiplication de 1
		
	

