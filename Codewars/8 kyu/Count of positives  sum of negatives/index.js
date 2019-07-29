function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1) return [];
    let sum = [0, 0];
    for (x of input) {
        x > 0 ? sum[0]++ : sum[1] += x;
    }
    return sum;
}