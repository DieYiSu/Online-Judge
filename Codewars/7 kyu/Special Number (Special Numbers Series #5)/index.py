def special_number(number):
    arr = str(number)
    arr = list(filter(fn, arr))
    print(arr)
    return "Special!!" if arr == list(str(number)) else "NOT!!"

def fn(x):
    return x <= '5'