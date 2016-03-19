/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var map = new Map();
var wordBreak = function(s, set) {
    for (var j = s.length - 1; j >= 0; j++) {

    }
    if (map.has(s)) {
        return map.get(s);
    }
    var result = [];
    if (s === "") {
        result.push("");
        return result;
    }
    for (var i = 1; i <= s.length; i++) {
        var sub = s.substring(0, i);
        if (set.has(sub)) {
            var temps = wordBreak(s.substring(i), set);
            for (var temp of temps) {
                result.push(sub + (temp === "" ? "" : " ") + temp);
            }
        }
    }
    map.set(s, result);
    return result;
}
