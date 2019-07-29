function isValidWalk(walk) {
    let counter = 0;
    console.log(walk);
    if (walk.length != 10) { return false };
    for (direction of walk) {
        switch (direction) {
            case 'n': counter += 1; break;
            case 'e': counter += 1; break;
            case 'w': counter -= 1; break;
            case 's': counter -= 1; break;
        }
    }
    return counter == 0 ? true : false;
}