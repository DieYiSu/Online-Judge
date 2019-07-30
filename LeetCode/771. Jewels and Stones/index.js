/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (j, s) {
    let sum = 0;
    j = Array.from(new Set(j.split('')));
    for (x of s) {
        if(j.includes(x)) sum++;
    }
    return sum;
}