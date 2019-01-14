// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

var letterCombinations = function(digits) {
  digits = digits.split("");
  let lettersArr = digits.map(function(digit) {
    return map[digit];
  });
  let results = lettersArr[0] || [];
  for (let i = 1; i < lettersArr.length; i++) {
    let tempResults = [];
    let currentCombo = lettersArr[i];
    for (let j = 0; j < currentCombo.length; j++) {
      let newChar = currentCombo[j];
      results.forEach(function(tempRes) {
        console.log(tempRes);
        tempResults.push(tempRes + newChar);
        console.log(tempResults);
      });
    }
    results = tempResults;
  }
  return results;
};
