var array;
/**
 * @constructor
 */
var Queue = function() {
    array = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    array.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    return array.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return array[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return array.length === 0;
};
