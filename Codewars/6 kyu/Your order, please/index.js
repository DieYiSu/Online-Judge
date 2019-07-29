function order(words) {
    let arr = new Array(words.split(' ').length);
    for (word of words.split(' ')) {
        let index = word.split('').filter(elem => !(isNaN(elem)))[0];
        arr[index - 1] = word;
    }
    return arr.join(' ')
}