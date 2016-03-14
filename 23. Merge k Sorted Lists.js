 var mergeKLists = function(lists) {
     if (!lists || lists.length === 0) {
         return [];
     }
     return mergeLists(lists, 0, lists.length - 1);
 }

 var mergeLists = function(lists, start, end) {
     if (start >= end) {
         return lists[start];
     }
     var mid = (start + end) >>> 1;
     return merge(mergeLists(lists, start, mid), mergeLists(lists, mid + 1, end));
 }
