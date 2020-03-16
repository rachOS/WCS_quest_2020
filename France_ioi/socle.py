firstFloor = int(input())
lastFloor = int(input())

gap = (firstFloor - lastFloor) + 1

totalConcrete = 0

for loop in range(gap):

    floor = firstFloor**2
    totalConcrete += floor

    firstFloor -= 1

print(totalConcrete)

     