def min_sum(arr):
    sum = 0;
    for i in range(len(arr)//2):
        max_num = max(arr)
        min_num = min(arr)
        sum+= max_num*min_num
        arr.remove(max_num)
        arr.remove(min_num)
    return sum