/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var row = checkRow(board);
    var col = checkCol(board);
    var block = checkBlock(board);
    return row && col && block;
};

var checkRow = function(board) {
    for (var i = 0; i < board.length; i++) {
        var set = new Set();
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] !== ".") {
                if (set.has(board[i][j])) {
                    return false;
                } else {
                    set.add(board[i][j]);
                }
            }
        }
    }
    return true;
}

var checkCol = function(board) {
    for (var i = 0; i < board[0].length; i++) {
        var set = new Set();
        for (var j = 0; j < board.length; j++) {
            if (board[j][i] !== ".") {
                if (set.has(board[j][i])) {
                    return false;
                } else {
                    set.add(board[j][i]);
                }
            }
        }
    }
    return true;
}

var checkBlock = function(board) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var set = new Set();
            for (var k = 3 * i; k < 3 * i + 3; k++) {
                for (var t = 3 * j; t < 3 * j + 3; t++) {
                    if (board[k][t] !== ".") {
                        if (set.has(board[k][t])) {
                            return false;
                        } else {
                            set.add(board[k][t]);
                        }
                    }
                }
            }
        }
    }
    return true;
}
