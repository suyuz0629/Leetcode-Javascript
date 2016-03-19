/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//    0 a b c
//  0 0 1 2 3
//  c 1 1 2 2
//  a 2 1 2 3
//
//
//
var minDistance = function(word1, word2) {
    if (word1 === "" || word2 === "") {
        return Math.max(word1.length, word2.length);
    }
    var dp = [];
    var i;
    for (i = 0; i < 2; i++) {
        var temp = new Array(word2.length + 1);
        temp.fill(0);
        dp.push(temp);
    }
    for (i = 1; i < dp[0].length; i++) {
        dp[0][i] = i;
    }
    for (i = 1; i <= word1.length; i++) {
        dp[i%2][0] = i;
        for (var j = 1; j < dp[0].length; j++) {
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                dp[i % 2][j] = dp[(i - 1) % 2][j - 1];
            } else {
                dp[i % 2][j] = 1 + Math.min(dp[(i - 1) % 2][j - 1], Math.min(dp[(i - 1) % 2][j], dp[i % 2][j - 1]));
            }
        }
    }
    return dp[word1.length % 2][word2.length];
};
