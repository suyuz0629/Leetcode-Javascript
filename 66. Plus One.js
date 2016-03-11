/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (!digits || digits.length === 0) {
        return [1];
    }
    var carry = 1;
    for (var i = digits.length - 1; i >= 0; i--) {
        var newcarry = Math.floor((digits[i] + carry) / 10);
        digits[i] = (digits[i] + carry) % 10;
        carry = newcarry;
        if (carry !== 1) {
            break;
        }
    }
    if (carry === 1) {
        digits.unshift(1);
    }
    return digits;
};
