baseCube = 17
totalBaseCube = 0
finalBaseCube = 0
turnMinus = 9

for loop in range(turnMinus):
	totalBaseCube = baseCube**3 # baseCube*baseCube*baseCube
	finalBaseCube += totalBaseCube
	baseCube -= 2 # incrémentation du total à chaque tour
	print(turnMinus)

print(finalBaseCube)
