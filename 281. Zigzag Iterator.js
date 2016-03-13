var array;
var x;
var y;
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v2
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    array = [];
    if (v1 && v1.length !== 0) {
        array.push(v1);
    }
    if (v2 && v2.length !== 0) {
        array.push(v2);
    }
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return array.length !== 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    var arr = array.shift();
    var re = arr.shift();
    if (arr.length !== 0) {
        array.push(arr);
    }
    return re;
};
