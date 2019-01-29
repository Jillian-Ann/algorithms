// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function(intervals) {
  let sortedArr = intervals.sort((a, b) => a[0] - b[0]);
  let i = 0;
  while (i < sortedArr.length - 1) {
    let currentSub = sortedArr[i];
    let compareSub = sortedArr[i + 1];
    console.log(sortedArr, i, i + 1, currentSub, compareSub);
    if (currentSub[1] >= compareSub[0]) {
      sortedArr.splice(i, 2, [currentSub[0], compareSub[1]]);
    }
    i++;
  }
  return sortedArr;
};

merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
