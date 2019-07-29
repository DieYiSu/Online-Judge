function abbrevName(name) {
    let arr = [];
    for (word of name.split(' ')) {
        arr.push(word.split('')[0].toUpperCase());
    }
    return arr.join('.');
}