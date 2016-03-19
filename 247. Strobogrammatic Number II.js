/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    return helper(n, n);
};

var helper = function(n, m) {
    if (n === 0) {
        return [""];
    }
    if (n === 1) {
        return ["0", "1", "8"];
    }
    var temp = helper(n - 2, m);
    var result = [];

    for (var tempS of temp) {
        if (n !== m) {
            result.push("0" + tempS + "0");
        }
        result.push("1" + tempS + "1");
        result.push("6" + tempS + "9");
        result.push("8" + tempS + "8");
        result.push("9" + tempS + "6");
    }
    return result;
}
