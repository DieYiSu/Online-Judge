function findOdd(A) {
    var cache = {};
    A.filter(element => {
        cache[element] = (cache[element] || 0) + 1;
        return element;
    })

    return parseInt(Object.keys(cache).filter(element => {
        return cache[element] % 2 == 1;
    })[0]);
}