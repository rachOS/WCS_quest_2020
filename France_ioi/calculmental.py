rangE = int(input())
nbrChoice = 66

multiplicator = 1

for loop in range(rangE):

    nbrChoice = multiplicator * nbrChoice
    
    multiplicator += 1

    print(nbrChoice)
