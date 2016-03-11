/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    if (numRows <= 0) {
        return result;
    }
    result.push([1]);
    var count = numRows - 1;
    while (count) {

        var level = result[numRows - count - 1];
        var newLevel = [];
        newLevel.push(1);
        for (var i = 0; i < level.length - 1; i++) {
            newLevel.push(level[i] + level[i + 1]);
        }
        newLevel.push(1);
        result.push(newLevel);
        count--;
    }
    return result;
};
