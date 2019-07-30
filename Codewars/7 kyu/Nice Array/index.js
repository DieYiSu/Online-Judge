function isNice(arr) {
    if (arr.length === 0) return false;
    return arr.every(x => arr.includes(x + 1) || arr.includes(x - 1));
}