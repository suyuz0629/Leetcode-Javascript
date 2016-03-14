var uniquePaths = function(m, n) {
    var dp = [], i, j, temp;
    var array = new Array(n);
    array.fill(1);
    dp.push(array);
    for (i = 1; i < m; i++) {
        temp = new Array(n);
        temp[0] = 1;
        dp.push(temp);
    }
    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            dp[i][j] = dp[i  - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
