/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greatestNumber = Math.max(...candies);
    return result = candies.map(candy => candy+extraCandies >= greatestNumber ? true : false)
};