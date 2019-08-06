def check_exam(arr1,arr2):
    sum = 0
    for index, element in enumerate(arr2):
        if arr2[index] == '':
            sum+= 0
        elif arr2[index] == arr1[index]:
            sum+= 4
        elif arr2[index] != arr1[index]:
            sum-= 1
    return 0 if sum <0 else sum