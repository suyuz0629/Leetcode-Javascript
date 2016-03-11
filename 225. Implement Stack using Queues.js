var array;
/**
 * @constructor
 */
var Stack = function() {
    array = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    array.unshift(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    return array.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return array[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return array.length === 0;
};
