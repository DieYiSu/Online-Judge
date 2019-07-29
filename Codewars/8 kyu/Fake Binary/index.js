function fakeBin(x) {
    return x.split('').map(x => {
        return x >= 5 ? 1 : 0;
    }).join('');
}