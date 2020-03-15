# Votre programme devra lire un entier : le nombre de jours que dure la randonnée.
# Ensuite, il devra afficher le nombre de fois que l'incantation est répétée, 
# sachant qu'elle est prononcée une fois par seconde pendant 16 heures

nbrDays = int(input())
timeInHour = 16
oneHourInMin = 60
oneMinuteInSec = 60

secPerDay = timeInHour*oneHourInMin*oneMinuteInSec

print(secPerDay*nbrDays)