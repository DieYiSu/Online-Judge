function positiveSum(arr) {
    return arr.length == 0 ? 0 : arr.filter(x => x > 0).length > 0 ? arr.filter(x => x > 0).reduce((sum, x) => sum + x) : 0;
}