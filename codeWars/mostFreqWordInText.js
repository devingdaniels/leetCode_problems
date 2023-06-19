// function topThreeWords(text) {
//   const textArr = text.split(" ");
//   const map = new Map();
//   for (let word of textArr) {
//     if (!map.has(word)) {
//       map.set(word, 1);
//     } else {
//       map.set(word, map.get(word) + 1);
//     }
//   }
//   // convert the Map to an array of key-value pairs using Array.from(map)
//   const entriesArray = Array.from(map);
//   console.log(entriesArray);
//   entriesArray.sort((a, b) => b[1] - a[1]); // Step 3

//   const three = entriesArray.slice(0, 3).map((entry) => entry[0]); // Step 4

//   return three;
// }
function findTopThreeWords(text) {
  // Remove punctuation and convert text to lowercase
  const cleanedText = text.replace(/[^\w\s']+/g, "").toLowerCase();

  // Split the text into an array of words
  const words = cleanedText.split(/\s+/);

  // Create a map to store word frequencies
  const wordFrequency = new Map();

  // Count the occurrences of each word
  for (const word of words) {
    const count = wordFrequency.get(word) || 0;
    wordFrequency.set(word, count + 1);
  }

  // Sort the words by frequency in descending order
  const sortedWords = Array.from(wordFrequency.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  // Extract the top 3 words or fewer if there are fewer unique words
  const topThreeWords = sortedWords.slice(0, 3).map(([word]) => word);

  return topThreeWords;
}

// Driver code
const word =
  "In a village of La Mancha, the name of which I have no desire to call tomind, there lived not long since one of those gentlemen that keep a lancein the lance-rack, an old buckler, a lean hack, and a greyhound forcoursing. An olla of rather more beef than mutton, a salad on mostnights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extraon Sundays, made away with three-quarters of his income.";
console.log(findTopThreeWords(word)); // => ["a", "of", "on"]
