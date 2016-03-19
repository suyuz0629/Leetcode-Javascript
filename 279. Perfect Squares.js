/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var dp = new Array(n + 1);
    dp[0] = 0;
    for (var i = 1; i <= n; i++) {
        var min = i;
        for (var j = 1; j * j <= i; j++) {
            min = Math.min(min, 1 + dp[i - j * j]);
        }
        dp[i] = min;
    }
    return dp[n];
};
