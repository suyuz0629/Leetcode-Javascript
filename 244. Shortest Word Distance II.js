var map;
/**
 * @constructor
 * @param {string[]} words
 */
var WordDistance = function(words) {
    map = new Map();
    for (var i = 0; i < words.length; i++) {
        if (!map.has(words[i])) {
            map.set(words[i], []);
        }
        map.get(words[i]).push(i);
    }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    var l1 = map.get(word1);
    var l2 = map.get(word2);

    var cur1 = 0, cur2 = 0, min = Number.MAX_VALUE;
    while (cur1 < l1.length && cur2 < l2.length) {
        min = Math.min(min, Math.abs(l1[cur1] - l2[cur2]));
        if (l1[cur1] < l2[cur2]) cur1++;
        else cur2++;
    }
    return min;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var wordDistance = new WordDistance(words);
 * wordDistance.shortest("word1", "word2");
 * wordDistance.shortest("anotherWord1", "anotherWord2");
 */
