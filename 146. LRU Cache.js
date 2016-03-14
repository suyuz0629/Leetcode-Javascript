var map, head, tail, cap;
/**
 * @constructor
 */
var LRUCache = function(capacity) {
    cap = capacity;
    map = new Map();
    head = new Node(0, 0);
    tail = new Node(0, 0);
    head.next = tail;
    tail.pre = head;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (map.has(key)) {
        var node = map.get(key);
        deleteNode(node);
        addToHead(node);
        return node.value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    // search
    if (map.has(key)) {
        var node = map.get(key);
        node.value = value;
        deleteNode(node);
        addToHead(node);
        return;
    }

    // not set before
    if (map.size === cap) {
        map.delete(tail.pre.key);
        deleteNode(tail.pre);
    }
    var newNode = new Node(key, value);
    map.set(key, newNode);
    addToHead(newNode);
};

function deleteNode(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
}

function addToHead(node) {
    node.next = head.next;
    head.next.pre = node;

    head.next = node;
    node.pre = head;
}

function Node(key, value) {
    this.key = key;
    this.value = value;
}
