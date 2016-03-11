// No need to find all sum at first,
// when queried, we find it
var map;
/**
 * initialize your data structure here
 * @constructor
 */
var TwoSum = function() {
    map = new Map();
};

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
TwoSum.prototype.add = function(input) {
    if (map.has(input)) {
        map.set(input, 2);
    } else {
        map.set(input, 1);
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
TwoSum.prototype.find = function(val) {
    if (map.size < 1) {
        return false;
    }
    for (var num of map.keys()) {
        if (val === num * 2 && map.get(num) == 2) {
            return true;
        } else if (val !== num * 2 && map.has(val - num)) {
            return true;
        }
    }
    return false;
};
