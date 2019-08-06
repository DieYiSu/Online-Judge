def disarium_number(number):
    array = str(number)
    sum = 0

    for i in range(1, len(array)+1):
        print(i)
        sum+= int(array[i-1]) ** i 
    return "Disarium !!" if sum == number else "Not !!"