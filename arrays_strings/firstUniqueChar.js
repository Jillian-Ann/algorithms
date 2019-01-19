// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

var firstUniqChar = function(s) {
  let hashMap = {};
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    hashMap[currentChar] = hashMap[currentChar] || 0;
    hashMap[currentChar]++;
  }
  for (let j = 0; j < s.length; j++) {
    if (hashMap[s[j]] === 1) {
      return j;
    }
  }
  return -1;
};
