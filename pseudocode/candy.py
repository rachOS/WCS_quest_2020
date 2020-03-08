money = float(5.0)
price_candy = float(0.15)
nb_candy = int()

def buy_candy(money, price_candy, nb_candy):

    total = money

    while money > 0 and price_candy > 0:

        nb_candy += 1
        print(nb_candy, money, price_candy*nb_candy)
        money = total - price_candy*nb_candy

    return nb_candy, money, price_candy
    

print (buy_candy(10,1.32, 0))
