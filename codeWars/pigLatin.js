/* 
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt(text) {
  const words = text.split(" ");
  const result = words.map(function (word) {
    if (word.length <= 1) {
      return word; // Leave single-character words unchanged
    }
    const firstLetter = word[0];
    const restOfWord = word.slice(1);
    return restOfWord + firstLetter + "ay";
  });
  return result.join(" ");
}

// Driver code
console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
