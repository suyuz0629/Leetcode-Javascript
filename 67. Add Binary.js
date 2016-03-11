/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (!a && !b) {
        return "";
    }
    if (!a) {
        return b;
    }
    if (!b) {
        return a;
    }
    var carry = 0;
    var aindex = a.length - 1;
    var bindex = b.length - 1;
    var result = "";
    var sum = 0
    while (aindex >= 0 || bindex >= 0) {
        sum = carry;
        if (aindex >= 0) {
            sum += parseInt(a.charAt(aindex--));
        }
        if (bindex >= 0) {
            sum += parseInt(b.charAt(bindex--));
        }
        if (sum === 2 || sum === 0) {
            result = "0" + result;
        } else {
            result = "1" + result;
        }
        carry = sum >= 2 ? 1 : 0;
    }
    if (carry === 1) {
        result = "1" + result;
    }
    return result;
};
