/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length == str2.length) {
    const str_a = str1.toLowerCase().split("").sort().join("");
    const str_b = str2.toLowerCase().split("").sort().join("");

    return str_a == str_b;
  } 
  else {
    return false;
  }
}

module.exports = isAnagram;
