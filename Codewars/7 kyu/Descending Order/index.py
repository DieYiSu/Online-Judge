def Descending_Order(num):
    arr = str(num)
    map(str, arr);
    return int(''.join(sorted(arr, reverse=True)))