/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    var count = 0;
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return count;
    }

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                remove(grid, i, j);
            }
        }
    }
    return count;
};

var direction = [[0, -1], [0, 1], [-1, 0], [1, 0]];

var remove = function(grid, i, j) {
    grid[i][j] = '0';
    for (var k = 0; k < direction.length; k++) {
        var newI = i + direction[k][0];
        var newJ = j + direction[k][1];
        if (newI < grid.length && newI >= 0 && newJ < grid[0].length && newJ >= 0 && grid[newI][newJ] === '1') {
            remove(grid, newI, newJ);
        }
    }
}
