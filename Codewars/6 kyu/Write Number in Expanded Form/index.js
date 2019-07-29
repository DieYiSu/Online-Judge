function expandedForm(num) {
    let arr = num.toString().split('');
    return arr.map((x, index) => {
        return x == 0 ? null : x * (Math.pow(10, (arr.length - 1) - index));
    }).filter(x => x != null).join(' + ');
}