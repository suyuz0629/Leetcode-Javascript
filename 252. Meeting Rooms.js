var canAttendMeetings = function(intervals) {
    if (!intervals) {
        return false;
    }
    intervals.sort(function(interval1, interval2) {
        return interval1[0] - interval2[0];
    });
    for (var i = 0; i < intervals.length - 1; i++) {
        if (intervals[i + 1][0] - intervals[i][1] < 0) {
            return false;
        }
    }
    return true;
};
