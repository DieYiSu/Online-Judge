function wave(string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        let splitArr = string.split('');
        if (splitArr[i] === ' ') {
            continue;
        }
        splitArr[i] = splitArr[i].toUpperCase();
        arr.push(splitArr.join(''));

    }
    return arr
}