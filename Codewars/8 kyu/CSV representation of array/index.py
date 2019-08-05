def toCsvText(array):
    x = ''
    for sublist in array:
        for element, index in enumerate(sublist):
            if index == len(sublist):
                x += f"{str(element)}"
            else:
                x += f"{str(element)},"
        x += '\n'
    return x
