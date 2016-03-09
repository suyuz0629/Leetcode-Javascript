var shortestDistance = function(words, word1, word2) {
    if (!words) {
        return 0;
    }

    var array1 = [];
    var array2 = [];
    for (var i = 0; i < words.length; i++) {
        if (word1 === words[i]) {
            array1.push(i);
        }
        if (word2 === words[i]) {
            array2.push(i);
        }
    }
    var index1 = 0;
    var index2 = 0;
    var distance = Number.MAX_VALUE;

    while (index1 < array1.length && index2 < array2.length) {
        distance = Math.min(distance, Math.abs(array1[index1] - array2[index2]));
        if (distance == 1) {
            return 1;
        }
        if (array1[index1] < array2[index2]) {
            index1++;
        } else {
            index2++;
        }
    }
    return distance;
};

// O(n)
var shortestDistance = function(words, word1, word2) {
    if (!words) {
        return 0;
    }
    var index = -1;
    var distance = Number.MAX_VALUE;
    var array1 = [];
    var array2 = [];
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
