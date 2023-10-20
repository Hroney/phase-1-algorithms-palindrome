function isPalindrome(word) {
  // Write your algorithm here
  let palindromeBool = true;
  const wordArray = word.toLowerCase().split('');
  for (let i = 0; i < wordArray.length / 2; i++) {
    palindromeBool = (wordArray[i] !== wordArray.slice().reverse()[i]) ? false : palindromeBool;
  }
  return palindromeBool;
}

/* 
  Add your pseudocode here
  
  Have a boolean that is set to True, assuming it is a palindrome
  Word is passed into function
  Word is cast to all lower case letters
  Word is spread out into an array
  Iterate through the array for as long as the array is in length halved (Halved because you meet in the middle)
    Check each letter from the front and the back against each other
    If a letter does not match, set Boolean to false
  Return boolean status
  
*/

/*
  Add written explanation of your solution here
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
