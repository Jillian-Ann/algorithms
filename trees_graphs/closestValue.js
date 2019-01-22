function difference(val1, val2) {
  return Math.abs(val1 - val2);
}

function findClosestValueInBst(tree, target) {
  let currentVal = tree.value;
  function findClosest(tree, target, previousVal) {
    if (target > currentVal) {
      if (tree.right) {
        let rightClosest = findClosest(tree.right, target, currentVal);
        return difference(currentVal, target) < difference(rightClosest, target)
          ? currentVal
          : rightClosest;
      } else {
        return difference(currentVal, target) < difference(previousVal, target)
          ? currentVal
          : previousVal;
      }
    }
    if (target <= currentVal) {
      if (tree.left) {
        let leftClosest = findClosest(tree.left, target, currentVal);
        return difference(currentVal, target) < difference(leftClosest, target)
          ? currentVal
          : leftClosest;
      } else {
        return difference(currentVal, target) < difference(previousVal, target)
          ? currentVal
          : previousVal;
      }
    }
  }
}
