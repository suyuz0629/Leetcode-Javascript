/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var start = 5;
    var result = 0;
    while (start <= n) {
        result += Math.floor(n / start);
        start *= 5;
    }
    return result;
};
