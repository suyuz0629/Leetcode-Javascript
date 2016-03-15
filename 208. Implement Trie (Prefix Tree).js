/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
    this.label = "";
    this.hasWord = false;
    this.childs = new Map();
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var cur = root;
    for (var i = 0; i < word.length; i++) {
        if (cur.childs.has(word.charAt(i))) {
            cur = cur.childs.get(word.charAt(i));
        } else {
            var node = new TrieNode();
            node.label = word.charAt(i);
            cur.childs.set(word.charAt(i), node);
            cur = node;
        }
        if (i === word.length - 1) {
            cur.hasWord = true;
        }
    }
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var cur = root;
    for (var i = 0; i < word.length; i++) {
        if (cur.childs.has(word.charAt(i))) {
            cur = cur.childs.get(word.charAt(i));
        } else {
            return false;
        }
    }
    return cur.hasWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    var cur = root;
    for (var i = 0; i < prefix.length; i++) {
        if (cur.childs.has(prefix.charAt(i))) {
            cur = cur.childs.get(prefix.charAt(i));
        } else {
            return false;
        }
    }
    return cur.childs.size > 0 || cur.hasWord;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */
