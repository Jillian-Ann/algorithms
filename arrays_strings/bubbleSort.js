function bubbleSort(array) {
  let swapCount = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let currentElem = array[i];
    let comparingElem = array[i + 1];
    if (comparingElem < currentElem) {
      array[i] = comparingElem;
      array[i + 1] = currentElem;
      swapCount++;
    }
  }
  if (swapCount) bubbleSort(array);
  return array;
}
