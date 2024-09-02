function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length
  if (len == 1) {
    return true;
  } else if (len % 2 == 0) {
    for (i = 0; i < (len/2); i++) {
      if (word[i] != word[len - 1 - i]) {
        return false;
      }
    }
  } else {
    for (i = 0; i < ((len - 1)/2); i++ ) {
      if (word[i] != word[len - 1 - i]) {
        return false;
      }
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  If the word is only one letter, return true.
  Else, if the word is an even length, compare first and last, second and second to last,
    etc, until the middle of the word. Return false if any of the comparisons fail.
  Else, if the word is an odd length, compare first and last, second and second to last,
    etc., leaving out the middle letter. Return false if any of the comparisons fail.
  If they're all the same, return true
*/

/*
  Add written explanation of your solution here
  Palindomes are the same forwards as backwards; therefore, the first letter of the word must
  match the last letter of the word, and so on and so forth. One letter words are always palidromes,
  and the middle letter of a odd-length word will always be compared to itself, so there are two cases
  to check for if the word has a length greater than 1. In an even-length word, every letter must be
  checked, from the first letter to the midpoint. In an odd-length word, the middle letter is excluded.
  If all letters are checked against its pair and there are no discrepencies, then the word is indeed 
  a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
