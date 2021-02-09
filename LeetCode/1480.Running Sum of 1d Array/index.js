/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let temp = 0;
    let arr = [];
    for(num of nums){
        arr.push(num+temp);
        temp += num;
    }
    return arr;
};