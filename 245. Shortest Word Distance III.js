var shortestWordDistance = function(words, word1, word2) {
    var obj = {};
    var min = Number.MAX_VALUE;
    for (var i = 0; i < words.length; i++) {
        if (words[i] == word1 || words[i] == word2) {
            if (obj[words[i]] === undefined) {
                obj[words[i]] = i;
                if (obj[word1] !== undefined && obj[word2] !== undefined) {
                    if (word1 !== word2) {
                        min = Math.min(min, Math.abs(obj[word1] - obj[word2]));
                    }
                }
            } else {
                if (obj[word1] !== undefined && obj[word2] !== undefined) {
                    if (word1 == word2) {
                        min = Math.min(min, i - obj[word1]);
                    } else {
                        obj[words[i]] = i;
                        min = Math.min(min, Math.abs(obj[word1] - obj[word2]));
                    }
                }
                obj[words[i]] = i;
            }
        }
    }
    return min;
};
