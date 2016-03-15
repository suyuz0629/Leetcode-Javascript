var TrieNode = function() {
    this.label = "";
    this.hasWord = false;
    this.childs = new Map();
}


/**
 * @constructor
 */
var WordDictionary = function() {
    // since the prototype will call this variable, we should not
    // use new to allocate, but use it like a static variable that
    // don't have "new"
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
    var cur = root;
    for (var i = 0; i < word.length; i++) {
        if (!cur.childs.has(word.charAt(i))) {
            var node = new TrieNode();
            node.label = word.charAt(i);
            cur.childs.set(word.charAt(i), node);
        }
        cur = cur.childs.get(word.charAt(i));
        if (i === word.length - 1) {
            cur.hasWord = true;
        }
    }
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    return searchWithNode(root, word);
};

var searchWithNode = function(node, word) {
    var cur = node;

    for (var i = 0; i < word.length; i++) {
        if (cur.childs.size === 0) {
            return false;
        }
        if (word.charAt(i) === ".") {
            var get = false;
            for (var key of cur.childs.keys()) {
                get |= searchWithNode(cur.childs.get(key), word.substring(i + 1));
            }
            if (get) {
                return true;
            } else {
                return false;
            }
        } else {
            if (cur.childs.has(word.charAt(i))) {
                cur = cur.childs.get(word.charAt(i));
            } else {
                return false;
            }
        }
    }
    return cur.hasWord;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
