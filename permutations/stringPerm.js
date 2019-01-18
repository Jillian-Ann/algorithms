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

// alternative answer

function recursiveStringPermutations(str) {
  var results = [];
  // getPerms(str, []);
  function getPerms(str, arr) {
    if (typeof str === "string")
      //on first call, split the string into an array
      str = str.split("");
    if (!str.length)
      //base case- push the compiled results into the results variable
      results.push(arr.join(""));
    for (var i = 0; i < str.length; i++) {
      var letter = str.splice(i, 1);
      arr.push(letter);
      console.log("arr:", arr, "i:", i);
      getPerms(str, arr); //recursive call
      arr.pop();
      str.splice(i, 0, letter);
    }
  }
  getPerms(str, []);
  return results
    .filter(function(el, index) {
      return results.indexOf(el) === index; //filter out non-unique words
    })
    .sort();
}
