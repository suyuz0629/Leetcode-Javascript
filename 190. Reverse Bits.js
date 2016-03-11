var reverseBits = function(n) {
    var result = 0;
    var count = 0;
    while (count++ != 32) {
        result *= 2; // 1073741824 << 1 = -2147483648, 1073741824 * 2 = 2147483648
        result += (n & 1);
        n >>= 1;
    }
    return result;
};
