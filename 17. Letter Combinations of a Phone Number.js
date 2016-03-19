/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || digits === "") {
        return [];
    }
    var map = new Map();
    map.set(50, "abc");
    map.set(51, "def");
    map.set(52, "ghi");
    map.set(53, "jkl");
    map.set(54, "mno");
    map.set(55, "pqrs");
    map.set(56, "tuv");
    map.set(57, "wxyz");
    var result = [];
    result.push("");
    var index = 0;
    while (index < digits.length) {
        var size = result.length;
        var charCode = digits.charCodeAt(index++);
        if (charCode < 50) {
            continue;
        }
        for (var i = 0; i < size; i++) {
            var cur = result.shift();
            for (var letter of map.get(charCode)) {
                result.push(cur + letter);
            }
        }
    }
    return result;
};
