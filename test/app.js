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
    console.log(map.get("this"));
    console.log(map.get("sentence"));
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
    console.log(typeof l1[cur1]);
    while (cur1 < l1.length && cur2 < l2.length) {
        min = Math.min(min, Math.abs(l1[cur1] - l2[cur2]));
        if (parseInt(l1[cur1]) < parseInt(l2[cur2])) cur1++;
        else cur2++;

      console.log("cur1 " + cur1 + " cur2 " + cur2);
    }
    return min;
};
var words = ["this","is","a","long","run","sentence","is","fun","day","today","sunny","weather","is","a","day","tuesday","this","sentence","running","rainy"];
var wordDistance = new WordDistance(words);
wordDistance.shortest("this", "sentence");
