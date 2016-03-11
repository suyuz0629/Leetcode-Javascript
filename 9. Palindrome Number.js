/**
 * @param {number} x
 * @return {boolean}
 */

// Compare half of the integer
var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    var result = 0;
    while (x > result) {
        result = result * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return result == x || Math.floor(result / 10) == x;
};
