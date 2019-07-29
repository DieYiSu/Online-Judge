function squareSum(numbers) {
    let sum = 0;
    for (num of numbers) {
        sum += Math.pow(num, 2);
    }
    return sum
}