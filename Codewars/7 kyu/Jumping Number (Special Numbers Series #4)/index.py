def jumping_number(number):
    array = str(number)

    if len(array) == 1 : return "Jumping!!"
    for i in range(len(array)-1):
        if abs(int(array[i])- int(array[i+1])) != 1 : return "Not!!"
    return "Jumping!!"