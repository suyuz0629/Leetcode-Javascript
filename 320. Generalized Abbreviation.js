/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    var result = [], leftNum;
    result.push(word.length === 0 ? "" : "" + word.length);
    for(var i = 0 ; i < word.length ; i++)
        for(var right of generateAbbreviations(word.substring(i + 1)))
            result.push((leftNum = i > 0 ? "" + i : "") + word.substring(i, i + 1) + right);
    return result;
};
