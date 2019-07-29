function sequenceSum(begin, end, step) {
    let counter = 0,
        sum = 0;
    while (begin + (counter * step) <= end) {
        sum += begin + (counter * step);
        counter++;
    }
    return sum;
};