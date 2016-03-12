// Binary search
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1;
        var right = n;
        var obj = {};
        while (left < right) {
            var mid = (left + right) >>> 1;

            var check = obj[mid] === undefined ? isBadVersion(mid) : obj[mid];
            obj[mid] = check;
            if (mid === left) {
                break;
            }
            if (check) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return obj[left] ? left : right;
    };
};
