def list_animals(animals):
    list = ''
    for index, element in enumerate(animals):
        list+= f"{index+1}. {element}\n"
    return list