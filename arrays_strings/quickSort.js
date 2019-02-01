function randomPivot() {
  return Math.floor(Math.random() * (array.length - 1) + 1);
}

function quickSort(array) {
  let pivotIdx = randomPivot;
  if (prevPivots.includes(pivotIdx)) pivot;
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    // if(i === pivotIdx) continue
    let pivotElem = array[pivotIdx];
    let comparingElem = array[i];
    if (pivotElem < comparingElem && pivotIdx > i) {
      array[i] = pivotElem;
      array[pivotIdx] = comparingElem;
      pivotIdx = i;
      swaps++;
    }
    if (pivotElem > comparingElem && pivotIdx < i) {
      array[i] = pivotElem;
      array[pivotIdx] = comparingElem;
      pivotIdx = i;
      swaps++;
    }
  }
  if (swaps) quickSort(array);
  return array;
}
