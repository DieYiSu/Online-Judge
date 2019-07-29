function openOrSenior(data) {
    var result = [];
    for (info of data) {
        (info[0] >= 55) && (info[1] > 7) ? result.push('Senior') : result.push('Open');
    }
    return result;
}