// apple, pear, pink
// 3#5%4%4%applepearpink
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }
    var s = strs.length + "#";
    var str;
    for (str of strs) {
        s += str.length + "%";
    }
    for (str of strs) {
        s += str;
    }
    return s;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    if (!s || s.length === 0) {
        return [];
    }
    // abc, ska, ssaii
    // 3#3%3%4%abcskassaii
    var array = s.split("#");
    var count = parseInt(array[0]);
    // 3%3%4%abcskassaii
    var ts = s.substring(array[0].length + 1);
    var size = ts.split("%");
    var eachSize = new Array(count);
    var total = 0;
    var i;
    for (i = 0; i < count; i++) {
        eachSize[i] = parseInt(size[i]);
        total += size[i].length + 1;
    }

    var result = new Array(count);
    var now = 0;
    for (i = 0; i < count; i++) {
        result[i] = ts.substring(total, total + eachSize[i]);
        total += eachSize[i];
    }
    return result;
    // 1#1%0
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

// apple, pear, pink
// 3#5%apple4%pear4%pink
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    if (!strs || strs.length === 0) {
        return null;
    }
    var s = strs.length + "#";
    var str;
    for (str of strs) {
        s += str.length + "%" + str;
    }
    return s;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    if (s === undefined || s === null) {
        return [];
    }
    // abc, ska, ssaii
    // 3%abc3%ska5%ssaii
    var array = s.split("#");
    var count = parseInt(array[0]);

    // abc, ska, ssaii
    // 3%abc3%ska5%ssaii
    var ts = s.substring(array[0].length + 1);

    var i = 0;
    var result = new Array(count);
    var index = 0;

    while (i < s.length) {
        var length = ts.indexOf("%", i);
        if (length === -1){
            break;
        }
        var wordLength = parseInt(ts.substring(i, length));
        result[index++] = ts.substring(length + 1, length + 1 + wordLength);
        i = length + wordLength + 1;
    }
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
