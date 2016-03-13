var distance = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
var gameOfLife = function(board) {
    var i, j, k, live, ni, nj;
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[0].length; j++) {
            live = 0;
            for (k = 0; k < distance.length; k++) {
                ni = i + distance[k][0];
                nj = j + distance[k][1];
                if (ni >= 0 && ni < board.length &&
                    nj >= 0 && nj < board[0].length) {
                    if ((board[ni][nj] & 1) == 1) {
                        live++;
                    }
                }
            }
            // 00
            // 0 dead cur and next
            // 1 live cur and dead next
            // 2 dead cur and live next
            // 3 live cur and next
            if ((board[i][j] & 1) === 1) {
                if (2 <= live && live <= 3) { // live on
                    board[i][j] = 3;
                } else {
                    board[i][j] = 1;
                }
            } else {
                if (live == 3) { // rep
                    board[i][j] = 2;
                }
            }
        }
    }
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[0].length; j++) {
            board[i][j] >>= 1;
        }
    }
};
