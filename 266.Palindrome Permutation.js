var canPermutePalindromeBitset = function(s) {
    // Using array, but not good for expansion of string
    if (!s) {
        return false;
    }
    var oddNum = 0;
    for (var i = 0; i < s.length; i++) {
        var index = s.charCodeAt(i);
        if (array[index] && array[index] % 2 !== 0) {
            oddNum--;
        } else {
            oddNum++;
        }
        if (array[index] === undefined) {
            array[index] = 1;
        } else {
            array[index]++;
        }
    }

    return oddNum <= 1;
};


var canPermutePalindromeArray = function(s) {
    // Using array, but not good for expansion of string
    if (!s) {
        return false;
    }

    var array = new Array(128);
    var oddNum = 0;
    for (var i = 0; i < s.length; i++) {
        var index = s.charCodeAt(i);
        if (array[index] && array[index] % 2 !== 0) {
            oddNum--;
        } else {
            oddNum++;
        }
        if (array[index] === undefined) {
            array[index] = 1;
        } else {
            array[index]++;
        }
    }

    return oddNum <= 1;
};

var canPermutePalindromeSet = function(s) {
    // Using set
    if (!s) {
        return false;
    }

    var set = new Set();

    for (var i = 0; i < s.length; i++) {
        var key = s.charAt(i);
        if (set.has(key)) {
            set.delete(key);
        } else {
            set.add(key);
        }
    }

    return set.size <= 1;
};

var canPermutePalindromeMap = function(s) {
    // Using map
    if (!s) {
        return false;
    }

    var map = new Map();

    for (var i = 0; i < s.length; i++) {
        var key = s.charAt(i);
        if (!map.has(key)) {
            map.set(key, 0);
        }
        map.set(key, map.get(key));
    }

    var oddNum = 0;
    for (var value of map.values()) {
        if (value % 2 !== 0) {
            oddNum++;
        }
    }

    return oddNum <= 1;
};
