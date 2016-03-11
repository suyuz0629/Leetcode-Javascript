var uniques;
/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    uniques = new Map();

    for (var word of dictionary) {
        var unique = getUnique(word);
        if (!uniques.has(unique)) {
            uniques.set(unique, new Set());
        }
        uniques.get(unique).add(word);
    }
};

var getUnique = function(word) {
    if (word.length <= 2) {
        return word;
    }
    return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
}

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    var unique = getUnique(word);
    return !uniques.has(unique) || (uniques.get(unique).has(word) && uniques.get(unique).size === 1);
};
