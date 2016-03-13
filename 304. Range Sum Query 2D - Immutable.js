var hold;
/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (!matrix || matrix.length === 0) {
        return;
    }
    var row = new Array(matrix[0].length + 1);
    row.fill(0);
    matrix.unshift(row);
    for (var i = 1; i < matrix.length; i++) {
        matrix[i].unshift(0);
        for (var j = 1; j < matrix[0].length; j++) {
            matrix[i][j] += matrix[i - 1][j] + matrix[i][j - 1] - matrix[i - 1][j - 1];
        }
    }
    hold = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (!hold || hold.length === 0) {
        return 0;
    }
    return hold[row2 + 1][col2 + 1] + hold[row1][col1] - hold[row1][col2 + 1] - hold[row2 + 1][col1];
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
