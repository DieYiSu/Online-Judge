function expressionMatter(a, b, c) {
    let arr = [];
    arr.push(
        a + b + c, a * b * c,
        a * (b + c), (a + b) * c,
        a + b * c, a * b + c
    );
    return Math.max(...arr);
}