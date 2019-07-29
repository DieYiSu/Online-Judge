var maxSequence = function (arr) {
    var dp = new Array(arr.length);
    dp[0] = arr[0];

    let max = dp[0];
    for (let i = 1; i < arr.length; i++) {
        dp[i] = arr[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        max = Math.max(dp[i], max);
    }
    return max > 0 ? max : 0;
}