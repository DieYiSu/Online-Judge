function deleteNth(arr, n) {
    var counter = {};
    return arr.filter(element => {
        counter[element] = (counter[element] || 0) + 1;
        return counter[element] <= n
    })
}