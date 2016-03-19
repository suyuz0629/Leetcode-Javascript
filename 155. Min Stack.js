var stack;
var minStack;
/**
 * @constructor
 */
var MinStack = function() {
    stack = [];
    minStack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    stack.push(x);
    if (minStack.length === 0 || x <= minStack[minStack.length - 1]) {
        minStack.push(x);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var temp = stack.pop();
    if (minStack[minStack.length - 1] === temp) {
        minStack.pop();
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return stack[stack.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return minStack[minStack.length - 1];
};
