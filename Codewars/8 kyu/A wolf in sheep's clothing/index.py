def warn_the_sheep(queue):
    queue = list(reversed(queue))
    if queue[0] == 'wolf' or queue[len(queue)-1] == 'wolf':
        return "Pls go away and stop eating my sheep"
    else :
        sheep = queue.index('wolf')
        return f"Oi! Sheep number {sheep}! You are about to be eaten by a wolf!"