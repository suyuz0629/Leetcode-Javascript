// Actually, record all the steps instead of calculating recrusively in dfs
// Modifying original array
var minCost = function(costs) {
    if (!costs || costs.length === 0) {
        return 0;
    }
    for (var i = 1; i < costs.length; i++) {
        costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
        costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
        costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
    }
    var n = costs.length - 1;
    return Math.min(Math.min(costs[n][0], costs[n][1]), costs[n][2]);
};


// Actually, record all the steps instead of calculating recrusively in dfs
var minCost = function(costs) {
    if (!costs || costs.length === 0) {
        return 0;
    }
    var sum = [];
    sum.push(costs[0][0]);
    sum.push(costs[0][1]);
    sum.push(costs[0][2]);
    for (var i = 1; i < costs.length; i++) {
        var temp = [];
        temp[0] = costs[i][0] + Math.min(sum[1], sum[2]);
        temp[1] = costs[i][1] + Math.min(sum[0], sum[2]);
        temp[2] = costs[i][2] + Math.min(sum[0], sum[1]);
        sum = temp;
    }
    var n = costs.length - 1;
    return Math.min(Math.min(sum[0], sum[1]), sum[2]);
};
