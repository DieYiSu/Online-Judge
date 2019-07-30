function comp(array1, array2) {
    if (array1 == null || array2 == null) return false;
    for (x of array2) {
        if (array1.includes(Math.sqrt(x))) {
            array1.splice(array1.indexOf(Math.sqrt(x)), 1);
        } else {
            return false;
        }
    }
    return true;
}