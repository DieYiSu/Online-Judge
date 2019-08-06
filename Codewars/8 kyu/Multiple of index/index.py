def multiple_of_index(arr):
    x = []
    for (index, element) in enumerate(arr):
        if index == 0:
            continue
        elif element % index == 0:
            x.append(element)
    return x