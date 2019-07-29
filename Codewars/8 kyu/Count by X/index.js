function countBy(x, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(x + x * i)
    }
    return arr;
}