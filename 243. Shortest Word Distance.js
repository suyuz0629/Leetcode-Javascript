var shortestDistance = function(words, word1, word2) {
    if (!words) {
        return 0;
    }
    var index = -1;
    var distance = Number.MAX_VALUE;
    for (var i = 0; i < words.length; i++) {
        if (word1 === words[i] || word2 === words[i]) {
            if (index >= 0 && words[i] !== words[index]) {
                distance = Math.min(i - index, distance);
            }
            index = i;
        }
    }
    return distance;
};
