var TrieNode = function(label) {
    this.index = -1;
    this.childs = {};
    this.label = label;
    this.list = [];
};

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var result = [];
var palindromePairs = function(words) {
    var root = new TrieNode("");
    var i = 0;
    var word;
    for (word of words) {
        add(root, word, i++);
    }

    i = 0;
    for (word of words) {
        search(root, word, i++);
    }
    return result;
};

var add = function(cur, word, index) {
    for (var i = word.length - 1; i >= 0; i--) {
        if (cur.childs[word.charAt(i)] === undefined) {
            cur.childs[word.charAt(i)] = new TrieNode(word.charAt(i));
        }
        if (isPalin(word, 0, i)) {
            cur.list.push(index);
        }
        cur = cur.childs[word.charAt(i)];
    }
    cur.list.push(index);
    cur.index = index;
};

var search = function(cur, word, index) {
    for (var i = 0; i < word.length; i++) {
        if (cur.index !== index && cur.index >= 0 && isPalin(word, i, word.length - 1)) {
            result.push([index, cur.index]);
        }
        cur = cur.childs[word.charAt(i)];
        if (!cur) {
            return;
        }
    }
    for (var j of cur.list) {
        if (index !== j) {
            result.push([index, j]);
        }
    }
};

var isPalin = function(word, i, j) {
    while (i < j) {
        if (word.charAt(i++) !== word.charAt(j--)) {
            return false;
        }
    }
    return true;
};
