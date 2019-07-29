function findNb(m) {
    let sum = 0,
        n = 0;
    while (sum < m) {
        n++;
        sum += n ** 3;
        if (sum == m) {
            return n;
        }
    }
    return -1;
}