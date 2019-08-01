var countSheep = function (num) {
    let arr = [];
    for (let x = 1; x <= num; x++) arr.push(`${x} sheep...`);
    return arr.join('');
}