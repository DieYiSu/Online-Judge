/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = [];
    for(index = 0; index < n; index++){
        arr.push(nums[0+index],nums[n+index]);
    }
    return arr;
};