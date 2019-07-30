function solve(arr) {
    let newArr = [];
    return newArr = arr.reverse().filter(x => newArr.includes(x) ? null : newArr.push(x)).reverse();
}