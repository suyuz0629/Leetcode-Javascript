// Recursive
var isPowerOfThree = function(n) {
    return n > 0 && (n === 1 || (n % 3 === 0 && isPowerOfThree(n / 3)));
};

// Iterative
var isPowerOfThree = function(n) {
    if (n > 1) {
        while (n % 3 === 0) n /= 3;
    }
    return n === 1;
};

// Math
// Fastest
var isPowerOfThree = function(n) {
    return n > 0 && (Math.abs(Math.log(n) / Math.log(3) - Math.ceil(Math.log(n) / Math.log(3))) < 1e-15);
};

var isPowerOfThree = function(n) {
    return n === 0 ? false : n === Math.pow(3, Math.round(Math.log(n) / Math.log(3)));
};

// List all possibilities
var set = new Set();
var isPowerOfThree = function(n) {
    if (set.size === 0) {
        for (var num of [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683,
        59049, 177147, 531441, 1594323, 4782969, 14348907,
        43046721, 129140163, 387420489, 1162261467]) {
            set.add(num);
        }
    }
    return set.has(n);
};

// Match
var isPowerOfThree = function(n) {
    var string = n.toString(3); // 3 base byte representation
    var match = string.match("10*");
    return match && match[0] === string;
};
