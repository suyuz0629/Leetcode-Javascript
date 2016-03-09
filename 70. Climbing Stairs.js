var dp = {};
dp[1] = 1;
dp[2] = 2;
var climbStairs = function(n) {
    if (dp[n] !== undefined) {
        return dp[n];
    }
    dp[n] = climbStairs(n - 1) + climbStairs(n - 2); // no plus 1 here
    return dp[n];
};
