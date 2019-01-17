// Prompt
// Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

// The array that is returned should only contain unique values and its elements should be in alphabetical order.

function stringPermutations(string) {
  if (string.length === 1) {
    return [string];
  }
  let resultArr = [];
  for (let i = 0; i < string.length; i++) {
    let anchor = string[i];
    let others = string.slice(0, i) + string.slice(i + 1);
    console.log("others:", others);
    stringPermutations(others).forEach(subsequence =>
      resultArr.push(anchor + subsequence)
    );
  }
  return resultArr.sort();
}
