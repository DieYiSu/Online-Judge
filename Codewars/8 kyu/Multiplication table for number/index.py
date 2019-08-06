def multi_table(number):
    x = ''
    for i in range(1, 11):
        if i == 10 :
            x+= f"{i} * {number} = {i*number}"
        else : x+= f"{i} * {number} = {i*number}\n"
    return x